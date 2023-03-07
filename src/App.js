import React from "react";
import "./App.css"


function App() {

  return (
    
    <div className="container">
      <form>
        <fieldset>
        <Heading></Heading>
        <InputFields mobil={344}passw={333}></InputFields>
        
        <Submitbtn></Submitbtn>
        </fieldset>

      </form>
     
    </div>
  );
}
function Heading() {
  return (
    
    <div>
      <h1>Register here...</h1>
   
      
    </div>
  );
}
function InputFields({mobil,passw}) {
  return (
    
    <div>
      <input type="text" placeholder="mobile ...">{mobil}</input>
      <br></br>
      <br></br>
      <input type="text" placeholder="password ...">{passw}</input>
   
      
    </div>
  );
}
function Submitbtn () {
  return (
    
    <div>
      <input type="submit" value="submit"></input>
      
   
      
    </div>
  );
}

export default App;
