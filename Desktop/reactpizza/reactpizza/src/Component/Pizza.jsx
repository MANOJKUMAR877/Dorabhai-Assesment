import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
const Pizza = (props) => {


    return (
        <div>
            <div className="container">
                <div className="pizza">

                    <div className="small-pizza" >
                        <FontAwesomeIcon icon={faPizzaSlice} id="xs" size="xs" />
                        <h3 id="small">SMALL</h3>
                    </div>
                    <div className="medium-pizza">

                        <FontAwesomeIcon icon={faPizzaSlice} id="sm" size="1x" />
                        <h3 id="medium">MEDIUM</h3>

                    </div>
                    <div className="large-pizza">
                        <FontAwesomeIcon icon={faPizzaSlice} id="lg" size="2x" />
                        <h3 id="large">LARGE</h3>

                    </div>
                    <button id="small-minus" onClick={props.smallpizzaDecrement} > <FontAwesomeIcon icon={faMinusCircle} size="2x" /></button>
                    <button id="small-plus" onClick={props.smallpizzaIncrement} ><FontAwesomeIcon icon={faPlusCircle} size="2x" /></button>
                    <button id="medium-minus" onClick={props.mediumpizzaDecrement} > <FontAwesomeIcon icon={faMinusCircle} size="2x" /></button>
                    <button id="medium-plus" onClick={props.mediumpizzaIncrement}><FontAwesomeIcon icon={faPlusCircle} size="2x" /></button>
                    <button id="large-minus" onClick={props.largepizzaDecrement}> <FontAwesomeIcon icon={faMinusCircle} size="2x" /></button>
                    <button id="large-plus" onClick={props.largepizzaIncrement} ><FontAwesomeIcon icon={faPlusCircle} size="2x" /></button>
                    <h2><span id="smallvalue">{props.smallPizza}</span></h2>
                    <h2><span id="mediumvalue">{props.mediumPizza}</span></h2>
                    <h2><span id="largevalue">{props.largePizza}</span></h2>

                </div>
            </div>

        </div>
    );
}

export default Pizza;