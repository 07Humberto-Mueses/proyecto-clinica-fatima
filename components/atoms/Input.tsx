"use client"
import React, { useState } from 'react';
import clsx from 'clsx'

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  className?: string
}

export const FloatingInput = ({ label, className, ...rest }: FloatingInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative w-full">
      <input
        {...rest}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value !== "")
        }}
        placeholder=''
        className={clsx(
          "peer w-full rounded-xl px-4 pt-5 pb-2 text-lg text-gray-700 placeholder-transparent placeholder-gray-600 shadow-sm focus:outline-none focus:ring-0 focus:border-transparent",
          "text-gray-700",
          className,
        )}
      />
      <label
        className={clsx(
          "absolute left-3 px-1 text-gray-500 transition-all duration-200 pointer-events-none",
          isFocused || hasValue 
            ? "top-0 text-base" 
            : "top-3 text-lg",
            className,
        )}
      >
        {label}
      </label>
    </div>
  )
}
