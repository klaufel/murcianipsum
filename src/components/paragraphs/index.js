import React from 'react'
import Clipboard from '../clipboard'
import useGlobalContext from '../../hooks/useGlobalContext'
import {getString} from '../../utils'

const baseClass = 'Paragraphs'

const getHTML = (values, tag) =>
  values.map(value => <p>{tag ? `<p>${value}</p>` : value}</p>)

const Paragraphs = () => {
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

export default Paragraphs