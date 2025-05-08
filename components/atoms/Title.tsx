import React from 'react'

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="flex items-center justify-center text-2xl font-bold mb-4">{children}</h1>
  )
}
