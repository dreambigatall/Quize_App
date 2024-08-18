import { type } from "@testing-library/user-event/dist/type";
import {  useReducer, useState } from "react";

const initialState = {count:0, step:1};

function reducer(state, action){

    switch(action.type){
        case "inc":
            return {...state, count:state.count+action.payload}
        case "dec":
            return {...state, count:state.count-state.step}

        case "it":
            return{...state, step:state.step+action.payload}
        default:
            throw new Error("Unknown type command");
    }
    
}

export default function DateCounter(){
    //const [count,setCount] =useState(0);
    const [state, dispatch] = useReducer(reducer,initialState);
    //const [step, setStep] = useState(1);
    const {count, step} = state;

    const date = new Date("june 21 2027");
    date.setDate(date.getDate()+count);

    const dec = function(){
     //   setCount((count)=>count-step);
     dispatch({type:"dec" })
    }

    const inc = function (){
      //  setCount((count)=>count + step);
      dispatch({type:"inc", payload:1})
    }

    const setit= function (){
        dispatch({type:"it", payload:7})
    }

    return(
<div>
    <button onClick={inc}>+</button>
    <p>{count}</p>
    <button onClick={dec}>-</button>
    <button onClick={setit}>7</button>
</div>

    )



}