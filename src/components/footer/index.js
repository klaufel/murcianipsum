import React from 'react'

const baseClass = 'Footer'

const Header = () => (
  <footer className={baseClass}>
    <p className={`${baseClass}-description`}>
      Con mucho ❤️ por{' '}
      <a
        href="https://twitter.com/klaufel"
        target="_blank"
        rel="noopener noreferrer"
      >
        @klaufel
      </a>{' '}
    </p>
  </footer>
)

export default Header
