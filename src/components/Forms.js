import React, {useState} from 'react'

const Forms = () => {
     const initialState =('');
    const [details, setDetails] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
    })
  return (
    <div>
       
       <form action="submit">
           <input type="text" placeholder='First Name' value={details.fname} onChange={e=>setDetails({...details, fname:e.target.value})} />
      <p>{details.fname}</p>
      <input type="email" name="" value={details.email} id="" onChange={e=>setDetails({...details, email:e.target.value})} />
          <p>{details.email}</p>
          <button onClick={initialState}>Submit</button>
           </form>
     
    </div>

  )
}

export default Forms