import React from 'react'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button ({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex h-10 items-center bg-[#892E26] shadow-xl/20 rounded-2xl px-6 text-xl font-medium text-white transition-colors hover:bg-[#892E26] focus-visible:outline-offset-2 focus-visible:outline-[#A6382E] active:bg-[#892E26] aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        "text-gray-700",
        className
      )}
    >
      {children}
    </button>
  )
}
