'use client'
import React, { useState, useRef } from 'react'
import { Title } from "../atoms/Title"
import { FloatingInput } from "../atoms/Input"
import { Button } from "../atoms/Button"
import { Calculator } from 'lucide-react'
import { CardLiquidacion } from '../molecules/CardLiquidacion'
import imageLaboratorios from '@/repositories/imageData'

interface Resultado {
  [key: string]: string | number | undefined;
  LABORATORIO: string;
  TARIFA: number;
  NombreExamen: string;
}

export default function BuscarVariosExcel() {
  const [numero, setNumero] = useState('')
  const [resultados, setResultados] = useState<Resultado[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const resultadosRef = useRef<HTMLDivElement>(null)

  const buscar = async () => {
    if (!numero.trim()) {
      setError('Por favor ingrese un número para buscar')
      return
    }

    setLoading(true)
    setError(null)
    setResultados([])

    try {
      const res = await fetch(`/api/buscar?numero=${encodeURIComponent(numero.trim())}`)

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}))
        throw new Error(errorData.error || `Error ${res.status}: ${res.statusText}`)
      }

      const data: Resultado[] = await res.json();

      if (data.length === 0) {
        setError('No se encontraron resultados para la búsqueda.')
      } else {
        setResultados(data)
        // Desplazar al contenedor de resultados
        setTimeout(() => {
          resultadosRef.current?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    } catch (err) {
      console.error('Error en la búsqueda:', err)
      setError(`${err instanceof Error ? err.message : 'Ocurrió un error en la búsqueda.'}`)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      buscar()
    }
  }

  const minTarifa = Math.min(...resultados.map(r => r.TARIFA));

  return (
    <div className='flex items-center justify-center min-h-screen '>
      <div className="flex flex-col items-center justify-center w-full p-24">
        <Title>TARIFAS CONTRATADAS CON ENTIDADES EXTERNAS</Title>
        <div className="flex gap-8 mb-4">
          <FloatingInput
            label="CUPS"
            placeholder="CUPS"
            type="text"
            className='text-grey-300 bg-[#F4E2DE]'
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            onKeyUp={handleKeyPress}
            required
          />
          <label
            htmlFor="text"
            className='bg-[#590202] w-full text-white text-md rounded-sm p-2'
          >
            {resultados.length > 0
              ? String(resultados[0].NombreExamen)
              : "NOMBRE DEL EXAMEN"
            }
          </label>
        </div>
        <Button
          onClick={buscar}
          disabled={loading}
          className="bg-[#44803F] hover:bg-[#5DA957]"
        >
          <Calculator />Calcular
        </Button>
        {loading && (
          <div className="text-center py-4">
            <p className="text-gray-500 cargando-animacion">Buscando en archivos Excel...</p>
          </div>
        )}

        {error && (
          <div className=" text-black p-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="max-h-[350px] overflow-y-auto p-2">
          <div className="flex gap-4 p-2">
            {resultados.map((fila, i) => {

              const imagen = imageLaboratorios[fila.LABORATORIO]

              return (
                <div
                  key={i}
                >
                  <CardLiquidacion
                    imagen={imagen}
                    title={String(fila.LABORATORIO)}
                    valor={String(fila.TARIFA)}
                    isMin={fila.TARIFA === minTarifa}
                  />
                </div>
              )

            })}
          </div>
        </div>
      </div>
    </div>
  )
}