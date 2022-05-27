import React from 'react'

const CallApplyBind = () => {
    let name={
        firstname:'shubham',
        lastname:'joshi ',
        
       
     }
     let printFullName = function(hometown, state, method){
      console.log(this.firstname + " " + this.lastname + " from " + hometown + " " + state + " " + method)
  }
  //call method

  printFullName.call(name, "Pithoragarh", "Uttarakhand", "call")
     let name2 = {
       firstname: 'Sachin',
       lastname:'Tendulkar',

     }
     printFullName.call(name2, "Mumbai", "Maharashtra", "call")

//apply method
     printFullName.apply(name, ["Pithoragarh", "Uttarakhand", "apply"])


// bind method
  let printFunctionbyBind =  printFullName.bind(name, "Pithoragarh", "Uttarakhand", "bind")
  printFunctionbyBind()
  return (
    <div>

    </div>
  )
}

export default CallApplyBind