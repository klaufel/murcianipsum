import React from 'react'
import Nav from '../nav'

const baseClass = 'Header'

const Header = () => (
  <header className={baseClass}>
    <h1 className={`${baseClass}-title`}>
      <a className={`${baseClass}-link`} href="">
        Murcianipsum 🍋
      </a>
    </h1>
    <Nav />
  </header>
)

export default Header
