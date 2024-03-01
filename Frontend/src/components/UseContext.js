import React, { createContext, useContext, useReducer } from 'react'

const CartState=createContext();
const CartDispatch=createContext();
const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            return[...state,{id:action.id, name:action.name, price:action.price ,img:action.img,qty:action.qty,size:action.size}]
        case "REMOVE":
            let newArr=[...state]
            newArr.splice(action.index,1)
            return newArr;
        case "UPDATE":
            let arr=[...state]
            arr.find((food,index)=>{
                if(food.id===action.id){
                    console.log(food.qty,parseInt(action.qty),action.price+food.price)
                    arr[index]={...food,qty:parseInt(action.qty)+parseInt(food.qty), price:action.price+food.price}
                }
                return arr;
            })
            return arr;
        case "DROP":
            let emparr=[];
            return emparr;
        default:
            console.log("error in reducer");
    }
}
export const CartProvider=({children})=>{

    const[state,dispatch]= useReducer(reducer,[]);
    return (<CartDispatch.Provider value={dispatch}>
        <CartState.Provider value={state}>
           {children} 
        </CartState.Provider>
    </CartDispatch.Provider>)
}
export const StateContext=()=>useContext(CartState)
export const DispatchContext=()=>useContext(CartDispatch);
