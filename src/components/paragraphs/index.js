import React from 'react'
import useGlobalContext from '../../hooks/useGlobalContext'

const Paragraphs = () => {
  const {state} = useGlobalContext()

  return (
    <div className="Paragraphs">
      {state.paragraphs.map((p, index) => (
        <p key={index}>
          {state.showTag && `<p>`}
          {p}
          {state.showTag && `</p>`}
        </p>
      ))}
    </div>
  )
}

export default Paragraphs
