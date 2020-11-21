import React from 'react'
import Clipboard from '../clipboard'
import useGlobalContext from '../../hooks/useGlobalContext'
import {getString} from '../../repository'

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
      <div className={`${baseClass}-wrapper`}>
        <Clipboard value={getString(paragraphs, showTag)} />
        <div className={`${baseClass}-content`}>
          {getHTML(paragraphs, showTag)}
        </div>
      </div>
    </main>
  )
}
