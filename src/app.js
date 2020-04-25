import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Paragraphs from './components/paragraphs'
import {GlobalContextProvider} from './context/globalContext'
import './style.scss'

const App = () => {
  return (
    <GlobalContextProvider>
      <Header />
      <main className="Container">
        <div className="Wrapper">
          <Paragraphs />
        </div>
      </main>
      <Footer />
    </GlobalContextProvider>
  )
}

export default App
