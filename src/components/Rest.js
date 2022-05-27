import React from 'react'

const Rest = () => {
    function sum (){
      console.log(arguments)
      for (let i in arguments)
      sum+=arguments[i];
for (let i in arguments)
      sum+=i;
        document.write(sum)
    }
    sum(2,3,4)
  return (
    <div>
      
    </div>
  )
}

export default Rest

