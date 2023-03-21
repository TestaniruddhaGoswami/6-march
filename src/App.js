
import './App.css';
import Header from './Components/Usestates_prog';
import Prop_parent from './Components/props_prop_drilling';
function App() {
  return (
    <div className="App">
      
        <h1>Hello World</h1>
        <hr></hr>
        <Header name="Aniruddha goswami"
                id={788787} />  
                  <hr></hr>
                 <Prop_parent/>     
      </div>
     
    
  );
}


export default App;
