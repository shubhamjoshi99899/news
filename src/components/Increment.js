import React, {useState} from 'react'

const Increment = () => {
    const [state, setstate] = useState(0);

  return (
    <div>
        <button onClick={()=>setstate(state+1)}>+</button>
        <p>{state}</p>
        <button onClick={()=>setstate(state-1)}>-</button>
    </div>
  )
}

export default Increment