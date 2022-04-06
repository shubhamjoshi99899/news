import { useState } from "react";


const Hookcounter3 = () => {
    const initialState = ('');
    const [details, setDetails] = useState({
        firstName:'',
        lastName:'',
        email:'',
    });
  return (
    <div>
      
        <div className="form" style={{display:'block !important', width:'100%', padding:'20px'}}>
      <form action="submit" style={{display:'inline !important'}}>
          
       <input type="text" placeholder="First Name" value={details.firstName} style={{display:'inline'}} onChange={e=>setDetails({...details, firstName : e.target.value})} />
       
       <input type="text" placeholder="Last Name"  style={{display:'block'}} value={details.lastName} onChange={e=>setDetails({...details, lastName : e.target.value})} />
       <input type="email" placeholder="Email" value={details.email} onChange={e=>setDetails({...details, email : e.target.value})} />
       <button onClick={initialState} style={{display:'block', marginTop:'5px'}}>Submit</button>
       <p>Your First Name : {details.firstName}</p>
       <p>Your Last Name : {details.lastName}</p>
       <p>Your Email : {details.email}</p>
      </form>
      </div>
      

    </div>
  )
}

export default Hookcounter3
