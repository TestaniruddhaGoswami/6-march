import React from "react";
import { useState } from "react";

export default function NameChange(){
    const [count,setCount]=useState('Amit');

    function eventHandler1(){

setCount("Rajan");
if (count==="Rajan"){setCount("Amit")}

    }
    

    return(
        <>
        <p>my name is {count}</p>
        <button onClick={eventHandler1}>Change Name</button>
    
       
        </>


    )
  


}