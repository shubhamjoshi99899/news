import React, {useState, useEffect} from 'react'

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
  
    const logMousePosition  = e =>{
        console.log('Mouse event')
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() => {
        
      console.log('UseEffect called')   
      window.addEventListener('mousemove', logMousePosition)
    },[]);
  return (
     
    <div>
        Hooks x - {x} Y- {y}
    </div>
  )
}

export default HookMouse