import React, { useState } from 'react'

import Counter from './Counter.js'


//3 phases
//1. component  create or component mounts
//2. component updates
//3. component is deleted or unmount

function CounterA() {

  const [showCounter, setShowCounter] = useState(false)

  return (
    <div className='app'>
      {showCounter && (<div>
        <Counter />
      </div>)}

      <div style={{ marginTop: 400 }}>
        <button onClick={() => setShowCounter(true)} >Mount Counter</button>
        <button
          onClick={() => setShowCounter(false)}
        >Unmount </button>

      </div>

    </div>
  )
}

export default CounterA