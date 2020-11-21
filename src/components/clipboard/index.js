import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import Button from '../button'

const baseClass = 'Clipboard'

export default function Clipboard({value}) {
  const [status, setStatus] = useState(false)
  const refInput = useRef()

  const handleCopy = () => {
    refInput.current.select()
    document.execCommand('copy')
    setStatus(true)
    setTimeout(() => setStatus(false), 1000)
  }

  return (
    <div className={baseClass}>
      {status && <span className={`${baseClass}-status`}>¡Copiado!</span>}
      <Button size="small" onClick={handleCopy}>
        Copiar
      </Button>
      <textarea
        className={`${baseClass}-input`}
        type="text"
        ref={refInput}
        value={value}
        readOnly
      />
    </div>
  )
}

Clipboard.propTypes = {
  value: PropTypes.string
}
