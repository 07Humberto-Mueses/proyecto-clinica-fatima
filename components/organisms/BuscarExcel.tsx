// Este componente esta diseñado pra cargar un excel y hacer una busqueda solo en ese archivo
// no esta completado porque solo fue una prueba 
'use client'

import React, { useState } from 'react'
import * as XLSX from 'xlsx'

export default function BuscarExcel() {
  const [file, setFile] = useState<File | null>(null)
  const [inputValue, setInputValue] = useState('')
  const [results, setResults] = useState<any | null>(null)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0]
    if (uploadedFile) {
      setFile(uploadedFile)
    }
  }

  const handleSearch = () => {
    if (!file) return alert("Por favor carga un archivo Excel.")

    const reader = new FileReader()
    reader.onload = (e) => {
      const data = e.target?.result
      const workbook = XLSX.read(data, { type: 'binary' })
      const worksheet = workbook.Sheets[workbook.SheetNames[0]]
      const jsonData = XLSX.utils.sheet_to_json(worksheet)

      const foundRow = jsonData.find((row: any) =>
        Object.values(row).some(value => value == inputValue)
      )

      setResults(foundRow || null)
    }

    reader.readAsArrayBuffer(file)
  }

  return (
    <div className='p-6 max-w-xl mx-auto bg-white shadow rounded'>
      <h1 className='text-xl font-bold mb-4'>Buscar en Excel</h1>

      <input type="file" accept=".xlsx, .xls" onChange={handleFile} className='mb-4' />

      <div className='flex gap-2 mb-4'>
        <input
          type="text"
          placeholder="Número a buscar"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='border p-2 flex-1'
        />
        <button
          onClick={handleSearch}
          className='bg-blue-500 text-white px-4 py-2 rounded'
        >
          Buscar
        </button>
      </div>

      {results && (
        <pre className='bg-gray-100 p-4 rounded text-sm overflow-x-auto'>
          {JSON.stringify(results, null, 2)}
        </pre>
      )}

      {!results && file && (
        <p className='text-gray-500'>No se encontró ningún resultado aún.</p>
      )}
    </div>
  )
}
