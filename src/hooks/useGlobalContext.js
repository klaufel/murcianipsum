import React from 'react'
import GlobalContext from '../context/globalContext'

const useGlobalContext = () => {
  const {state, dispatch} = React.useContext(GlobalContext)
  return {state, dispatch}
}

export default useGlobalContext
