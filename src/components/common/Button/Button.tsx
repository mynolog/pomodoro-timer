import type { ReactNode } from 'react'

type ButtonProps = {
  onClick: () => void
  children: ReactNode
  disabled?: boolean
}

const Button = ({ onClick, children, disabled = false }: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center p-3 w-14 h-14 transition-all
      duration-200 ease-in-out opacity-80 hover:opacity-100
       bg-green-700 rounded-full text-white active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-800`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
