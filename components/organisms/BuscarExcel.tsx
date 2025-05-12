// Este componente esta diseñado pra cargar un excel y hacer una busqueda solo en ese archivo
// no esta completado porque solo fue una prueba 
'use client'

import React, { useState } from 'react'
import * as XLSX from 'xlsx'
import { Title } from '../atoms/Title';
import { Button } from '../atoms/Button';
import { Calculator } from 'lucide-react';

type ExcelRow = {
  [key: string]: string | number | boolean | null;
};

export default function BuscarExcel() {
  const [file, setFile] = useState<File | null>(null)
  const [inputValue, setInputValue] = useState('')
  const [results, setResults] = useState<ExcelRow | null>(null);

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
      const jsonData: ExcelRow[] = XLSX.utils.sheet_to_json(worksheet);

      const foundRow = jsonData.find((row: ExcelRow) =>
        Object.values(row).some(value => value == inputValue)
      )

      setResults(foundRow || null)
    }

    reader.readAsArrayBuffer(file)
  }

  return (
    <div className='flex flex-col p-8 max-w-3xl items-center justify-center'>
      <Title>PREPARACIÓN DE PROPUESTAS LA CONTRATACIÓN CON ENTIDADES</Title>

      <input type="file" accept=".xlsx, .xls" onChange={handleFile} className='mb-4' />

      <div className='flex gap-2 mb-4'>
        <input
          type="text"
          placeholder="Buscar"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='border p-2 flex-1'
        />
        <Button
          onClick={handleSearch}
        >
          <Calculator/> Calcular
        </Button>
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
