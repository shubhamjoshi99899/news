import React, {useState} from 'react'

const Increase = () => {
    const[value, setValue] = useState(0);
  return (

    <div>
        <h1>Increase/Decrease</h1>
         <button onClick={()=>setValue(prevVal=> prevVal+5)}>+</button>
         <p>{value}</p>
         <button>-</button>
    </div>
  )
}

export default Increase