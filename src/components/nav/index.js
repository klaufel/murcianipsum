import React from 'react'
import useGlobalContext from '../../hooks/useGlobalContext'
import Button from '../button'

const SIZES = [
  {value: '1'},
  {value: '2'},
  {value: '3', checked: true},
  {value: '4'},
  {value: '5'}
]

const baseClass = 'Nav'

export default function Nav() {
  const {state, dispatch} = useGlobalContext()

  const handleGenerate = () => dispatch({type: 'GENERATE'})

  const handleChangeNumbers = event => {
    dispatch({type: 'SET_NUMBER', payload: Number(event.target.value)})
  }

  const handleChangeTag = () => {
    dispatch({type: 'SET_SHOW_TAG', payload: !state.showTag})
  }

  return (
    <nav className={baseClass}>
      <div
        className={`${baseClass}-item`}
        role="group"
        onChange={handleChangeNumbers}
      >
        {SIZES.map(({value, checked}) => (
          <label>
            {value}
            <input
              defaultChecked={checked}
              id={`p${value}`}
              name="p"
              type="radio"
              value={value}
            />
          </label>
        ))}
      </div>
      <div className={`${baseClass}-item`}>
        <label>
          Achotemele
          <input type="checkbox" onChange={handleChangeTag} />
        </label>
      </div>
      <div className={`${baseClass}-item`}>
        <Button onClick={() => handleGenerate()}>¡RANDOM!</Button>
      </div>
    </nav>
  )
}
