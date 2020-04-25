import React, {useRef, useState} from 'react'
import Button from '../button'
import PT from 'prop-types'

const baseClass = 'Clipboard'

const Clipboard = ({value}) => {
  const [status, setStatus] = useState(false)
  const refInput = useRef()

  const handleCopy = () => {
    const {current} = refInput
    current.select()
    current.setSelectionRange(0, 99999)
    document.execCommand('copy')
    if (current.value) {
      setStatus(true)
      setTimeout(() => setStatus(false), 1000)
    }
  }

  return (
    <div className={baseClass}>
      {status && <span className={`${baseClass}-status`}>¡Copiado!</span>}
      <Button size="small" onClick={handleCopy}>
        Copiar
      </Button>
      <input
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
