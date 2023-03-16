import React from 'react';
import {useState} from 'react';
import"./Nexr.css"

export function Nexr (){
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
      setIsLogin(!isLogin);
    };
  
    return (
      <>
      <h1 className='Header'> SIGN UP /LOGIN FORM UI-3</h1>
      <div className='container'>
        <h1  className='Headers'>{isLogin ? "Log In" : "Sign Up"}</h1>
        
        <br/>
        <form >
          
          {isLogin ?(<>

          <div className='Login-container'>
              <label className='elementsd' htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" required />
              <br/>
  
              <label className='elementsd' htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" required />
              </div>
              <br/>
            </>):(<>
              <div className='Signup-container'>
              <label className='elements' htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" required />
              <br/>
  
              <label className='elements' htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" required />
              <br/>
              <label className='elements'htmlFor="email">                      Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </label>
          <input type="email" name="email" required />
          <br/>
  
          <label className='elements' htmlFor="password">Password   </label>
          <input type="password" name="password" required />
          </div>
          <br/><br/>
            </>)}
  
          <button className="btn" type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
          <br/>
        </form>
        <br/><br/>
  
        <span className='last' >
          {isLogin ? "Need an account?" : "Already have an account?"}
        </span><span onClick={toggleForm} style={{cursor:'pointer', textDecoration:'underline'}}>{isLogin?'Sign up' : 'Log in'}</span>
      </div>
      </>
    );
  }

 