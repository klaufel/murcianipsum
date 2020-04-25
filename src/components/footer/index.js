import React from 'react'

const baseClass = 'Footer'

const Header = () => (
  <footer className={baseClass}>
    <p className={`${baseClass}-description`}>
      Con mucho ❤️ desde{' '}
      <a
        href="https://www.murciaturistica.es/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Murcia
      </a>{' '}
      por{' '}
      <a
        href="https://twitter.com/klaufel"
        target="_blank"
        rel="noopener noreferrer"
      >
        @klaufel
      </a>
    </p>
  </footer>
)

export default Header
