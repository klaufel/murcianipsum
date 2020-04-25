import React from 'react'
import PT from 'prop-types'

const baseClass = 'Button'

const Button = ({children, size, ...props}) => {
  const sizeClass = size ? `${baseClass} ${baseClass}--${size}` : baseClass
  return (
    <button className={sizeClass} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PT.string,
  size: PT.oneOf(['small'])
}

export default Button
