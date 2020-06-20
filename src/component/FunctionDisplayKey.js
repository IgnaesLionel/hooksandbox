import React, {useState, useEffect} from 'react'

function FunctionDisplayKey() {

const [keyCode, setKeyCode] = useState('')

const handleKeyCode = (e) => {
setKeyCode(e.code)

}

useEffect (() => {
document.addEventListener('keyup', handleKeyCode)

  return () => {
    document.removeEventListener('keyup', handleKeyCode)
  }


}, [])

  return (
      <div> {keyCode}</div>
    )
}

export default FunctionDisplayKey
