import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import './Component/Pizza'
import React, { useState } from 'react';
import Pizza from './Component/Pizza';
import Adult from './Component/Adult';
import Children from './Component/Children';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function App() {
  const [smallPizzacount, setSmallpizza] = useState(0)
  const [mediumPizzacount, setMediumpizza] = useState(1)
  const [largePizzacount, setLargepizza] = useState(0)
  const [adultCount, setAdult] = useState(1)
  const [childCount, setChild] = useState(0)
  const [totalamountCount, setTotalamount] = useState(200)
  let smallPizza = smallPizzacount
  let mediumPizza = mediumPizzacount
  let largePizza = largePizzacount
  let adult = adultCount
  let child = childCount
  let totalamount = totalamountCount
  const smallpizzaDecrement = () => {
    if (smallPizza > 0 && totalamount >= 350) {
      smallPizza = smallPizza - 1
      totalamount = totalamount - 150
      setTotalamount(totalamount)
      setSmallpizza(smallPizza)
      child = child - 1
      setChild(child)
    }
  }
  const smallpizzaIncrement = () => {
    if (totalamount <= 850) {
      smallPizza = smallPizza + 1;
      totalamount = totalamount + 150;
      setTotalamount(totalamount)
      if (smallPizza >= 2) {
        smallPizza = smallPizza - 2;
        mediumPizza = mediumPizza + 1;
        totalamount = totalamount - 100;
        setTotalamount(totalamount)
        if (mediumPizza >= 2) {
          mediumPizza = mediumPizza - 2;
          largePizza = largePizza + 1;
          totalamount = totalamount - 100;
          setTotalamount(totalamount)
        }
        setMediumpizza(mediumPizza)
      }
      child = child + 1;
      setChild(child)
      setSmallpizza(smallPizza)
      setLargepizza(largePizza)
    }
  }
  const mediumpizzaDecrement = () => {
    if (totalamount >= 400 && mediumPizza > 0) {
      mediumPizza = mediumPizza - 1;
      setMediumpizza(mediumPizza)
      totalamount = totalamount - 200;
      setTotalamount(totalamount)
      if (adult >= 1) {
        adult = adult - 1;
      }
      else {
        child = child - 2;
      }
      setAdult(adult)
      setChild(child)

    }
  }
  const mediumpizzaIncrement = () => {
    if (totalamount <= 800) {
      totalamount = totalamount + 200;
      setTotalamount(totalamount)
      mediumPizza = mediumPizza + 1;
      if (mediumPizza >= 2) {
        mediumPizza = mediumPizza - 2;
        largePizza = largePizza + 1;
        totalamount = totalamount - 100;
        setTotalamount(totalamount)
        setLargepizza(largePizza)
      }
      setMediumpizza(mediumPizza)
      adult = adult + 1;
      setAdult(adult)
    }
  }
  const largepizzaDecrement = () => {
    if (largePizza > 0 && totalamount >= 500) {
      largePizza = largePizza - 1;
      totalamount = totalamount - 300;
      setTotalamount(totalamount)
      if (adult === 2) {
        adult = adult - 1;
        child = child - 2;
      }
      else if (adult >= 3) {
        adult = adult - 2;
      }
      else {
        child = child - 4;
      }
      setLargepizza(largePizza)
      setAdult(adult)
      setChild(child)
    }
  }
  const largepizzaIncrement = () => {
    if (totalamount <= 700) {
      totalamount = totalamount + 300
      setTotalamount(totalamount)
      largePizza = largePizza + 1;
      setLargepizza(largePizza)
      adult = adult + 2;
      setAdult(adult)
    }
  }
  const adultDecrement = () => {
    if (adult > 1) {
      adult = adult - 1;
      if (mediumPizza >= 1 && totalamount >= 400) {
        mediumPizza = mediumPizza - 1;
        totalamount = totalamount - 200;
        setTotalamount(totalamount)
      }
      else {
        largePizza = largePizza - 1;
        mediumPizza = mediumPizza + 1;
        totalamount = totalamount - 100;
        setTotalamount(totalamount)
        setLargepizza(largePizza)

      }
      setAdult(adult)
      setMediumpizza(mediumPizza)

    }
  }
  const adultIncrement = () => {
    if (totalamount <= 800) {
      adult = adult + 1;
      mediumPizza = mediumPizza + 1;
      totalamount = totalamount + 200;
      setTotalamount(totalamount)
      if (mediumPizza >= 2) {
        mediumPizza = mediumPizza - 2;
        largePizza = largePizza + 1;
        totalamount = totalamount - 100;
        setTotalamount(totalamount)
        setLargepizza(largePizza)
      }
      setAdult(adult)
      setMediumpizza(mediumPizza)
    }
  }
  const childIncrement = () => {
    if (totalamount <= 850) {
      smallPizza = smallPizza + 1;
      child = child + 1;
      totalamount = totalamount + 150;
      setTotalamount(totalamount)
      if (smallPizza >= 2) {
        mediumPizza = mediumPizza + 1;
        totalamount = totalamount - 100;
        setTotalamount(totalamount)
        smallPizza = smallPizza - 2;
        if (mediumPizza >= 2) {
          largePizza = largePizza + 1;
          mediumPizza = mediumPizza - 2;
          totalamount = totalamount - 100;
          setTotalamount(totalamount)
          setLargepizza(largePizza)
        }
        setMediumpizza(mediumPizza)
      }
      setChild(child)
      setAdult(adult)
      setSmallpizza(smallPizza)
    }
  }
  const childDecrement = () => {
    if (child > 0) {
      child = child - 1;
      if (smallPizza >= 1) {
        smallPizza = smallPizza - 1;
        totalamount = totalamount - 150;
        setTotalamount(totalamount)
      }
      else if (mediumPizza >= 1) {
        mediumPizza = mediumPizza - 1;
        smallPizza = smallPizza + 1;
        totalamount = totalamount - 50;

        setTotalamount(totalamount)
      }
      else if (largePizza >= 1) {
        largePizza = largePizza - 1;
        mediumPizza = mediumPizza + 1;
        smallPizza = smallPizza + 1;
        totalamount = totalamount + 50;
        setTotalamount(totalamount)
      }
      setMediumpizza(mediumPizza)
      setLargepizza(largePizza)
      setSmallpizza(smallPizza)
      setChild(child)
    }
  }

  return (
    <div className="App">
      <i id="heading"><FontAwesomeIcon icon={faShoppingCart} />Order Pizza </i>
      <Pizza
        smallPizza={smallPizza}
        mediumPizza={mediumPizza}
        largePizza={largePizza}
        
        smallpizzaIncrement={smallpizzaIncrement}
        smallpizzaDecrement={smallpizzaDecrement}
        mediumpizzaIncrement={mediumpizzaIncrement}
        mediumpizzaDecrement={mediumpizzaDecrement}
        largepizzaIncrement={largepizzaIncrement}
        largepizzaDecrement={largepizzaDecrement} />
      <hr id="line1"></hr>
      <Adult
        adult={adult}
        adultDecrement={adultDecrement}
        adultIncrement={adultIncrement} />
      <hr id="line"></hr>
      <Children
        child={child}
        totalamount={totalamount}
        childIncrement={childIncrement}
        childDecrement={childDecrement}


      />
    </div>
  );
}

export default App;
