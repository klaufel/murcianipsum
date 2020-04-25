import React from 'react'
import PT from 'prop-types'
import {genParagraphs} from '../utils'
import {phrases} from '../phrases'

const GlobalContext = React.createContext()

const initialState = {
  number: 3,
  showTag: false,
  paragraphs: genParagraphs(phrases, 3)
}

const stateParagraphs = number => genParagraphs(phrases, number)

const reducer = (state, action) => {
  switch (action.type) {
    case 'GENERATE':
      return {
        ...state,
        paragraphs: stateParagraphs(state.number)
      }
    case 'SET_NUMBER':
      return {
        ...state,
        number: Number(action.payload),
        paragraphs: stateParagraphs(Number(action.payload))
      }
    case 'SET_SHOW_TAG':
      return {...state, showTag: !!action.payload}
  }
}

const GlobalContextProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = {state, dispatch}

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  )
}

GlobalContextProvider.propTypes = {
  children: PT.node
}

const GlobalContextConsumer = GlobalContext.Consumer

export {GlobalContext, GlobalContextProvider, GlobalContextConsumer}

export default GlobalContext
