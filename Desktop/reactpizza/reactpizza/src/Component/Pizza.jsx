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
                    <button id="small-minus" onClick={props.smallpizzaDecrement} disabled={props.smallPizza === 0}> <FontAwesomeIcon icon={faMinusCircle} size="2x" /></button>
                    <button id="small-plus" onClick={props.smallpizzaIncrement} disabled={(props.totalAmount===props.maximiumAmount) || (props.color())}><FontAwesomeIcon icon={faPlusCircle} size="2x" /></button>
                    <button id="medium-minus" onClick={props.mediumpizzaDecrement}  disabled={(props.mediumPizza === 0 && props.largePizza > 0) || (props.mediumPizza === 1 && props.largePizza === 0)} > <FontAwesomeIcon icon={faMinusCircle} size="2x" /></button>
                    <button id="medium-plus" onClick={props.mediumpizzaIncrement} disabled={(props.totalAmount===props.maximiumAmount )|| (props.color())} ><FontAwesomeIcon icon={faPlusCircle} size="2x" /></button>
                    <button id="large-minus" onClick={props.largepizzaDecrement} disabled={(props.largePizza === 0 && props.mediumPizza > 0) || (props.largePizza === 1 && props.mediumPizza === 0)}> <FontAwesomeIcon icon={faMinusCircle} size="2x" /></button>
                    <button id="large-plus" onClick={props.largepizzaIncrement} disabled={(props.totalAmount===props.maximiumAmount)|| (props.color())|| (props.colorLarge())} ><FontAwesomeIcon icon={faPlusCircle} size="2x" /></button>
                    <h2><span id="smallvalue">{props.smallPizza}</span></h2>
                    <h2><span id="mediumvalue">{props.mediumPizza}</span></h2>
                    <h2><span id="largevalue">{props.largePizza}</span></h2>

                </div>
            </div>

        </div>
    );
}

export default Pizza;