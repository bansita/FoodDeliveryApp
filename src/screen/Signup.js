import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [details,setDetails]=useState({name:"",email:"",password:"",location:""})
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch("http://localhost:5000/api/createUser",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:details.name,email:details.email,password:details.password,location:details.location})
        })
        const json=await response.json();
        console.log(json);
        if(!json.sucess){
            alert("Invalid user");
        }
    }
    const onChange=(e)=>{
        setDetails({...details,[e.target.name]:e.target.value})
    }
  return (
    <>
    <div className="mt-3 container">
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" name="name" value={details.name} onChange={onChange}/>
        
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" name="email" value={details.email} onChange={onChange}/>
        
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" name="password" value={details.password} onChange={onChange}/>
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
        <input type="text" className="form-control" name="location" value={details.location} onChange={onChange}/>
    </div>
   
    <Link type="submit" className="m-3 btn btn-info" to='/login'>Submit</Link>
    {/* <Link to='/login' className='m-3 btn btn-danger'>Login</Link> */}
</form>
</div>
    </>
  )
}
