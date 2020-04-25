import {useContext} from 'react'
import GlobalContext from '../context/globalContext'

const useGlobalContext = () => {
  const {state, dispatch} = useContext(GlobalContext)
  return {state, dispatch}
}

export default useGlobalContext
