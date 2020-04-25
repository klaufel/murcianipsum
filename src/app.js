import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Nav from './components/nav'
import Paragraphs from './components/paragraphs'
import {GlobalContextProvider} from './context/globalContext'
import './style.scss'

const App = () => {
  return (
    <GlobalContextProvider>
      <main className="Container">
        <Header />
        <Nav />
        <div className="Wrapper">
          <Paragraphs />
        </div>
        <Footer />
      </main>
    </GlobalContextProvider>
  )
}

export default App
