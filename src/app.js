import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Paragraphs from './components/paragraphs'
import {GlobalContextProvider} from './context/globalContext'
import './index.scss'

const App = () => {
  return (
    <GlobalContextProvider>
      <Header />
      <Paragraphs />
      <Footer />
    </GlobalContextProvider>
  )
}

export default App
