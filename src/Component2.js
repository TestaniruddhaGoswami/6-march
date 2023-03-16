import {useState} from 'react'
import "./Component2.css"
export function Component2() {
    const [input, setInput] = useState('')

    function handleChange(e){
        // console.log(e.target.value);
        let totalChar = e.target.value
        if(totalChar.length<=100){
            setInput(totalChar)
        }
    }

    return (<>
        <h1 className='Header'>TEXT AREA UI-2</h1>
        <form > 
            <textarea onChange={handleChange} value = {input}className='Form1' 
            placeholder='word limit is 100 only....'
            style= {{width:300, height:100}}/>
        </form>
        </>
    )
}