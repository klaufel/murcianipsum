import React from 'react'
import PropTypes from 'prop-types'

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
  children: PropTypes.string,
  size: PropTypes.oneOf(['small'])
}

export default Button
