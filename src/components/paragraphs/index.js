import React from 'react'
import Clipboard from '../clipboard'
import useGlobalContext from '../../hooks/useGlobalContext'
import {getString} from '../../service'

const baseClass = 'Paragraphs'

const getHTML = (values, tag) =>
  values.map((value, index) => (
    <p key={index}>{tag ? `<p>${value}</p>` : value}</p>
  ))

export default function Paragraphs() {
  const {state} = useGlobalContext()
  const {paragraphs, showTag} = state

  return (
    <main className={baseClass}>
      <Clipboard value={getString(paragraphs, showTag)} />
      <div className={`${baseClass}-wrapper`}>
        {getHTML(paragraphs, showTag)}
      </div>
    </main>
  )
}
