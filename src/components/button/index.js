import React from 'react'
import PropTypes from 'prop-types'

const SIZES = {small: 'small'}

const baseClass = 'Button'

export default function Button({children, size, ...props}) {
  const sizeClass = size ? `${baseClass} ${baseClass}--${size}` : baseClass

  return (
    <button className={sizeClass} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZES))
}
