import React, { useState }from 'react'
import { useNavigate,Link } from 'react-router-dom';

export default function Login() {
  const [details,setDetails]=useState({email:"",password:""})
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
      e.preventDefault();
      const response=await fetch("http://localhost:5000/api/login",{
          method:'POST',
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({email:details.email,password:details.password})
      })
      const json=await response.json();
      console.log(json);
      if(!json.sucess){
          alert("Invalid user");
      }
      else{
        localStorage.setItem("userEmail",details.email)
        localStorage.setItem("authtoken",json.authtoken)
        navigate('/');

      }
  }
  const onChange=(e)=>{
      setDetails({...details,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <div className="mt-3 container">
    <form onSubmit={handleSubmit}>
    
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" name="email" value={details.email} onChange={onChange}/>
        
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" name="password" value={details.password} onChange={onChange}/>
    </div>
   
    <button type="submit" className="m-3 btn btn-info">Submit</button>
    <Link to='/signup' className='m-3 btn btn-danger'>Signup</Link>
</form>
</div>
</div>
  )
}
