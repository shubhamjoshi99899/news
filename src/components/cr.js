
import React, { useEffect, useState } from "react";

const CR = () =>{
  const [state, setstate] = useState(0);
   
  const onClick = () =>{
    setstate(state+1)
  }

  const onClickNew = () =>{
    setstate(state-1)
  }

  useEffect(() => {
    alert('I love you')
    
  }, []);
return (
  <>
  <button onClick={onClick}>Increase</button>
  <h1> {state} </h1>

  <button onClick={onClickNew}>Decrease</button>

  </>
)


}
export default CR