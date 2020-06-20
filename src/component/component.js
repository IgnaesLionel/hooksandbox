import React, {useState} from 'react'
//import ClassDisplayKey from './ClassDisplayKey'
import FunctionDisplayKey from './FunctionDisplayKey'
function Component() {

  const [show, setShow] = useState (true)

  const btnDisplay =show ? 'Cacher' : 'Afficher'

  return (
    <div>
    <button onClick={() => setShow(!show)}> {btnDisplay} </button>

    {show && <FunctionDisplayKey/> }
    </div>
  )
}

export default Component
