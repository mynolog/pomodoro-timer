import type { ReactNode } from 'react'

type ButtonProps = {
  onClick?: () => void
  children: ReactNode
  disabled?: boolean
  bgColor?: 'bg-green-700' | 'bg-red-800' | 'bg-gray-900'
}

const Button = ({
  onClick = () => {},
  children,
  disabled = false,
  bgColor = 'bg-green-700',
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center p-3 w-14 h-14 transition-all
      duration-200 ease-in-out opacity-80 hover:opacity-100
      ${bgColor} rounded-full text-white active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-400`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
