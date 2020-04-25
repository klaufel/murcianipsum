import React, {useRef, useState} from 'react'
import Button from '../button'
import PT from 'prop-types'

const baseClass = 'Clipboard'

const Clipboard = ({value}) => {
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
  value: PT.string
}

export default Clipboard
