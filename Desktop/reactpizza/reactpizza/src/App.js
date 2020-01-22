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
  let totalAmount = totalamountCount
  const value={
    maximiumAmount:950
  }
  const color=()=>
  {
    if(largePizza===3 && totalAmount===900)
    {
      return true
    }
  }
  const colorLarge=()=>
  {
    if(totalAmount>=750)
    {
      return true
    }
  }

  const smallpizzaDecrement = () => {
    if (smallPizza > 0 && totalAmount >= 350) {
      smallPizza = smallPizza - 1
      totalAmount = totalAmount - 150
      setTotalamount(totalAmount)
      setSmallpizza(smallPizza)
      child = child - 1
      setChild(child)
    }
  }
  const smallpizzaIncrement = () => {
    if (totalAmount <= 850) {
      smallPizza = smallPizza + 1;
      totalAmount = totalAmount + 150;
      setTotalamount(totalAmount)
      if (smallPizza >= 2) {
        smallPizza = smallPizza - 2;
        mediumPizza = mediumPizza + 1;
        totalAmount = totalAmount - 100;
        setTotalamount(totalAmount)
        if (mediumPizza >= 2) {
          mediumPizza = mediumPizza - 2;
          largePizza = largePizza + 1;
          totalAmount = totalAmount - 100;
          setTotalamount(totalAmount)
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
    if (totalAmount >= 400 && mediumPizza > 0) {
      mediumPizza = mediumPizza - 1;
      setMediumpizza(mediumPizza)
      totalAmount = totalAmount - 200;
      setTotalamount(totalAmount)
      if (adult > 1) {
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
    if (totalAmount <= 800) {
      totalAmount = totalAmount + 200;
      setTotalamount(totalAmount)
      mediumPizza = mediumPizza + 1;
      if (mediumPizza >= 2) {
        mediumPizza = mediumPizza - 2;
        largePizza = largePizza + 1;
        totalAmount = totalAmount - 100;
        setTotalamount(totalAmount)
        setLargepizza(largePizza)
      }
      setMediumpizza(mediumPizza)
      adult = adult + 1;
      setAdult(adult)
    }
  }
  const largepizzaDecrement = () => {
    if (largePizza > 0 && totalAmount >= 500) {
      largePizza = largePizza - 1;
      totalAmount = totalAmount - 300;
      setTotalamount(totalAmount)
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
    if (totalAmount <= 700) {
      totalAmount = totalAmount + 300
      setTotalamount(totalAmount)
      largePizza = largePizza + 1;
      setLargepizza(largePizza)
      adult = adult + 2;
      setAdult(adult)
    }
  }
  const adultDecrement = () => {
    if (adult > 1) {
      adult = adult - 1;
      if (mediumPizza >= 1 && totalAmount >= 400) {
        mediumPizza = mediumPizza - 1;
        totalAmount = totalAmount - 200;
        setTotalamount(totalAmount)
      }
      else {
        largePizza = largePizza - 1;
        mediumPizza = mediumPizza + 1;
        totalAmount = totalAmount - 100;
        setTotalamount(totalAmount)
        setLargepizza(largePizza)
      }
      setAdult(adult)
      setMediumpizza(mediumPizza)
    }
  }
  const adultIncrement = () => {
    if (totalAmount <= 800) {
      adult = adult + 1;
      mediumPizza = mediumPizza + 1;
      totalAmount = totalAmount + 200;
      setTotalamount(totalAmount)
      if (mediumPizza >= 2) {
        mediumPizza = mediumPizza - 2;
        largePizza = largePizza + 1;
        totalAmount = totalAmount - 100;
        setTotalamount(totalAmount)
        setLargepizza(largePizza)
      }
      setAdult(adult)
      setMediumpizza(mediumPizza)
    }
  }
  const childIncrement = () => {
    if (totalAmount <= 850) {
      smallPizza = smallPizza + 1;
      child = child + 1;
      totalAmount = totalAmount + 150;
      setTotalamount(totalAmount)
      if (smallPizza >= 2) {
        mediumPizza = mediumPizza + 1;
        totalAmount = totalAmount - 100;
        setTotalamount(totalAmount)
        smallPizza = smallPizza - 2;
        if (mediumPizza >= 2) {
          largePizza = largePizza + 1;
          mediumPizza = mediumPizza - 2;
          totalAmount = totalAmount - 100;
          setTotalamount(totalAmount)
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
        totalAmount = totalAmount - 150;
        setTotalamount(totalAmount)
      }
      else if (mediumPizza >= 1) {
        mediumPizza = mediumPizza - 1;
        smallPizza = smallPizza + 1;
        totalAmount = totalAmount - 50;

        setTotalamount(totalAmount)
      }
      else if (largePizza >= 1) {
        largePizza = largePizza - 1;
        mediumPizza = mediumPizza + 1;
        smallPizza = smallPizza + 1;
        totalAmount = totalAmount + 50;
        setTotalamount(totalAmount)
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
        largepizzaDecrement={largepizzaDecrement}
        maximiumAmount={value.maximiumAmount}
        totalAmount={totalAmount}
        color={color}
        colorLarge={colorLarge}/>
      <hr id="line1"></hr>
      <Adult
        adult={adult}
        adultDecrement={adultDecrement}
        adultIncrement={adultIncrement} 
        maximiumAmount={value.maximiumAmount}
        totalAmount={totalAmount}
        color={color}/>
      <hr id="line"></hr>
      <Children
        child={child}
        totalAmount={totalAmount}
        childIncrement={childIncrement}
        childDecrement={childDecrement}
        maximiumAmount={value.maximiumAmount}
        color={color} />
    </div>
  );
}

export default App;
