import React from 'react'

const Button = ({ onClick, label, className, disabled }) => { // classes - don't use custom names for standard props
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {label}
    </button>
  )
}

export default Button
