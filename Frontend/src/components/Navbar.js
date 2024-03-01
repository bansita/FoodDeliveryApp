import React, { useState } from 'react'
import { Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../Model';
import Cart from '../screen/Cart';
import { StateContext } from './UseContext';
export default function Navbar() {
  const[cartView,setCartView]=useState(false);
  const navigate=useNavigate();
  let data=StateContext();
  const handleClick=()=>{
    localStorage.removeItem("authtoken");
    navigate('/login');
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-1">
          <li className="nav-item">
            <Link className="nav-link active fs-6" aria-current="page" to="/">Home</Link>
          </li>
        {(localStorage.getItem("authtoken"))?
          <li className="nav-item">
            <Link className="nav-link active fs-6" aria-current="page" to="/myOrder">My Order</Link>
          </li>
        :""}
        </ul>
        {(!localStorage.getItem("authtoken"))?
        <div className='d-flex'>
            <Link className="btn bg-white text-info mx-1" to="/login">Login</Link>
            <Link className="btn bg-white text-info mx-1" to="/signup">Signup</Link>
        </div>
        :
        <div>
          <div className="btn bg-white text-info mx-1" onClick={()=>{setCartView(true)}}>
            My Cart {" "}
            <Badge pill bg="danger">{data.length}</Badge>
          </div>
          {cartView?<Modal onClose={()=>{setCartView(false)}}><Cart/></Modal>:null}
          <div className="btn bg-white text-danger mx-1" onClick={handleClick}>Logout</div>
        </div>      }
      </div>
    </div>
  </nav>
  )
}
