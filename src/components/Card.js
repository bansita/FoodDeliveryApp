import React, { useEffect, useRef, useState } from "react";
import { StateContext,DispatchContext } from "./UseContext";
export default function Card(props) {
  let dispatch=DispatchContext();
  let data=StateContext();
  const priceRef=useRef();
  let options=props.options;
  let priceoptions=Object.keys(options);
  const[size,setSize]=useState(1);
  const[qty,setQty]=useState(1);
  const handleAdd=async()=>{
    let foodItem=[]
    for(const item of data){
      if(item.id=== props.food._id){
        foodItem=item;
        break;
      }
    }
    if(foodItem!=[]){
      if(foodItem.size === size){
        await dispatch({type:"UPDATE",id:props.food._id,price:finalPrice,qty:qty})
        return
      }
      else if(foodItem.size !== size){
        await dispatch({type:"ADD",id:props.food._id ,name:props.food.name, price:finalPrice, qty:qty, size:size})
        return
      }
      return
    }
    await dispatch({type:"ADD",id:props.food._id ,name:props.food.name, price:finalPrice, qty:qty, size:size})
    // await console.log(data);
  }
  let finalPrice=qty* parseInt(options[size]);
  useEffect(()=>{
    setSize(priceRef.current.value);
  },[])
  return (
    <div>
      <div className="card mt-3 " style={{ width: "18rem" ,maxHeight:"360px"}}>
        <img src={props.food.img} className="card-img-top" alt="..." style={{height:"130px" , objectFit:"fill"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.food.name}</h5>
          <div className="container w-100">
            <select className="m-2 h-100 bg-info rounded" onClick={(e)=>setQty(e.target.value)}>
              {Array.from(Array(6),(e,i)=>{
                return(
                  <option key={i+1} value={i+1}>{i+1}</option>
                )
              })}
            </select>
            <select className="m-2 h-100 bg-info rounded" ref={priceRef} onClick={(e)=>setSize(e.target.value)}>
             {priceoptions.map((data)=>{
              return <option key={data} value={data}>{data}</option>
             })
             }
            </select>
            <div className="d-inline h-100 fs-5">
              ₹{finalPrice}/-
            </div>
          </div>
          <hr></hr>
          <button className={`btn btn-info justify-center ms-2`} onClick={handleAdd}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
