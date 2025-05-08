import BuscarVariosExcel from '@/components/organisms/BuscarVariosExcel'
import React from 'react'

export default function Page() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      {/* Este componente esta creado para cargar un archivo de excel y hacer la busqueda en ese archivo, falta
      terminar de configurarlo para que la interfaz sea acorde al diseño de la aplicacion
      <BuscarExcel /> */}
      <BuscarVariosExcel />
    </div>
  )
}
