import React, {useState} from 'react'

const Hookcounter2 = () => {
    const initialcount =0;
    const [count, setCount] = useState(0);
        const incrementfive = ()=>{
            for (let index = 0; index <5; index++) {
                setCount(prevCount => prevCount+1);
                
            }
                  
            }
            const decrementfive = () =>{
          for (let i = 5; i>0; i--) {
              setCount(prevCount=>prevCount-1)
              
          }
        }
  return (
    <div>
        Count = {count}
    
        <br />
        <button onClick={()=>setCount(initialcount)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=> setCount(count-1)}>-</button>
        <button onClick={incrementfive}>increment 5</button>
        <button onClick={decrementfive}>Decrement 5</button>
        
    </div>
  )
}

export default Hookcounter2