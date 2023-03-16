import './App.css';
import {Component1} from './Component1'
import {Component2} from './Component2'
import { Nexr } from './Nexr';

function App() {
  return (
    <>
    <div className="App">
      <Component1/>
    </div>
    <hr></hr>
    <div>
    <Component2/>
    </div>
    <hr></hr>
   
    <div>
    <Nexr/>
    </div>
      
    </>
  );
}

export default App;