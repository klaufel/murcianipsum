import React from 'react'
import Clipboard from '../clipboard'
import useGlobalContext from '../../hooks/useGlobalContext'
import {toString} from '../../utils'

const baseClass = 'Paragraphs'

const toHTML = (values, tag) =>
  values.map((value, index) => (
    <p key={index}>{tag ? `<p>${value}</p>` : value}</p>
  ))

const Paragraphs = () => {
  const {state} = useGlobalContext()
  const {paragraphs, showTag} = state

  return (
    <div className={baseClass}>
      <Clipboard value={toString(paragraphs, showTag)} />
      <div className={`${baseClass}-content`}>
        {toHTML(paragraphs, showTag)}
      </div>
    </div>
  )
}

export default Paragraphs
