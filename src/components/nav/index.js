import React from 'react'
import useGlobalContext from '../../hooks/useGlobalContext'

const Nav = () => {
  const {state, dispatch} = useGlobalContext()

  const handleGenerate = () => dispatch({type: 'GENERATE'})

  const handleChangeNumbers = event => {
    dispatch({type: 'SET_NUMBER', payload: event.target.value})
  }

  const handleChangeTag = () => {
    dispatch({type: 'SET_SHOW_TAG', payload: !state.showTag})
  }

  return (
    <nav className="Nav">
      <div>
        ¿Cuántos quieres?
        <div role="group" onChange={handleChangeNumbers}>
          <label>
            1
            <br />
            <input type="radio" id="p1" name="p" value="1" defaultChecked />
          </label>
          <label>
            2
            <br />
            <input type="radio" id="p1" name="p" value="2" />
          </label>
          <label>
            3
            <br />
            <input type="radio" id="p1" name="p" value="3" />
          </label>
          <label>
            4
            <br />
            <input type="radio" id="p1" name="p" value="4" />
          </label>
          <label>
            5
            <br />
            <input type="radio" id="p1" name="p" value="5" />
          </label>
        </div>
      </div>
      <label>
        Quiero ver el Achotemele
        <input type="checkbox" onChange={handleChangeTag} />
      </label>
      <button className="Button" onClick={() => handleGenerate()}>
        ¡Generar!
      </button>
    </nav>
  )
}

export default Nav
