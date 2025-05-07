import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs/promises'
import { read, utils } from 'xlsx'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const numero = searchParams.get('numero')

  if (!numero) {
    return NextResponse.json({ error: 'Falta el número' }, { status: 400 })
  }

  try {
    // Ruta a la carpeta donde están los archivos Excel
    const carpeta = path.join(process.cwd(), 'data/excel')
    const resultados: any[] = []

    try {
      // Verificar si la carpeta existe
      await fs.access(carpeta)
    } catch (error) {
      console.error(`La carpeta ${carpeta} no existe o no hay acceso:`, error)
      return NextResponse.json(
        { error: 'Carpeta de archivos no encontrada o sin acceso' },
        { status: 500 }
      )
    }

    // Listar archivos en la carpeta
    const archivos = await fs.readdir(carpeta)
    console.log(`Encontrados ${archivos.length} archivos en ${carpeta}`)

    // Procesar cada archivo Excel
    for (const archivo of archivos) {
      if (!archivo.endsWith('.xlsx')) continue

      const ruta = path.join(carpeta, archivo)
      console.log(`Procesando: ${ruta}`)
      
      try {
        // Leer el archivo como un buffer
        const buffer = await fs.readFile(ruta)
        
        // Usar el método read que acepta directamente un buffer
        const libro = read(buffer, { type: 'buffer' })
        
        // Verificar si hay hojas disponibles
        if (!libro.SheetNames || libro.SheetNames.length === 0) {
          console.error(`El archivo ${archivo} no tiene hojas`)
          continue
        }
        
        const hoja = libro.Sheets[libro.SheetNames[0]]
        const datos = utils.sheet_to_json(hoja)

        console.log(`Archivo ${archivo}: ${datos.length} filas encontradas`)

        // Buscar coincidencias
        datos.forEach((fila: any) => {
          const valores = Object.values(fila).map(valor => 
            valor !== null && valor !== undefined ? String(valor) : ''
          )
          
          if (valores.some(valor => 
            valor.toLowerCase().includes(numero.toLowerCase())
          )) {
            resultados.push({ ...fila, archivo })
          }
        })
      } catch (err) {
        console.error(`Error al procesar archivo ${archivo}:`, err)
      }
    }

    console.log(`Se encontraron ${resultados.length} resultados para ${numero}`)
    return NextResponse.json(resultados)
  } catch (err) {
    console.error('Error general:', err)
    return NextResponse.json(
      { error: 'Error al leer los archivos' },
      { status: 500 }
    )
  }
}