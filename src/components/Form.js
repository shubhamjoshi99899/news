import React, { useState } from 'react'


const Form = () => {
    
    const initialState = ('');
const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone_no: ''
    });
    function submit() {
    alert('Submitted successfully');

    }
    
        
    
    
    return (
        <div>
            <h2>Form in ReactJS</h2>
            <form action="submit" style={{ display: 'block' }}>
                <input type="text" style={{ display: 'block' }} value={details.firstName} placeholder='First Name' onChange={e => setDetails({ ...details, firstName: e.target.value })} />
                <input type="text" style={{ display: 'block' }} value={details.lastName} placeholder='Last Name' onChange={e => setDetails({ ...details, lastName: e.target.value })} />
                <input type="email" style={{ display: 'block' }} value={details.email} placeholder='Email' onChange={e => setDetails({ ...details, email: e.target.value })} />
                <input type="number" style={{ display: 'block' }} value={details.phone_no} placeholder='Phone Number' onChange={e => setDetails({ ...details, phone_no: e.target.value })} />
            
            <button onClick={initialState} style={{display:'block', marginTop:'5px'}}>Reset</button>
            <button onClick={submit} style={{display:'block', marginTop:'5px'}}>Submit</button>
            </form>
        </div>
    )
}

export default Form