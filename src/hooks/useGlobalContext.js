import {useContext} from 'react'
import GlobalContext from '../context/globalContext'

export default function useGlobalContext() {
  const {state, dispatch} = useContext(GlobalContext)
  return {state, dispatch}
}
