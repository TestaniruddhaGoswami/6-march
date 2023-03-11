import React from "react";
import { useState } from "react";

export default function Counter(){
    const [count,setCount]=useState(0);

    function eventHandler1(){

setCount(count+1);
    }
    function eventHandler2(){

        setCount(count-1);
            }

    return(
        <>
        <p>{count}</p>
        <button onClick={eventHandler1}>add</button>
        <button onClick={eventHandler2}>sub</button>
        </>


    )
  


}