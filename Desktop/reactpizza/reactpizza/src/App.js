import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import './Component/Pizza'
import React from 'react';
import Pizza from './Component/Pizza';
import Adult from './Component/Adult';
import Children from './Component/Children';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function App() {
  //const [count, setCount] = useState(0);
  return (
    <div className="App">
      <i id="heading"><FontAwesomeIcon  icon={faShoppingCart}/>Order Pizza </i>

      <Pizza/>
    
      <Adult/>
      <hr></hr>
      <Children/>
      </div>
  );
}

export default App;
