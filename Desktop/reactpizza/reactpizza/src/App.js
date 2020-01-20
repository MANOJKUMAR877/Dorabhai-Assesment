
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import './App.css';
import './Component/Pizza'
import React from 'react';
import Pizza from './Component/Pizza';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function App() {
  //const [count, setCount] = useState(0);
  return (
    <div className="App">
      <i id="heading"><FontAwesomeIcon  icon={faShoppingCart}/>Order Pizza </i>

      <Pizza/>
      </div>
  );
}

export default App;
