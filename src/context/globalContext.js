import React, {createContext, useReducer} from 'react'
import PropTypes from 'prop-types'
import {genParagraphs} from '../utils'
import {phrases} from '../phrases'

const GlobalContext = createContext()

const initialState = {
  number: 3,
  showTag: false,
  paragraphs: genParagraphs({phrases, number: 3})
}

const stateParagraphs = number => genParagraphs({phrases, number})

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
        number: action.payload,
        paragraphs: stateParagraphs(action.payload)
      }
    case 'SET_SHOW_TAG':
      return {...state, showTag: !!action.payload}
  }
}

const GlobalContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = {state, dispatch}

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node
}

const GlobalContextConsumer = GlobalContext.Consumer

export {GlobalContext, GlobalContextProvider, GlobalContextConsumer}

export default GlobalContext
