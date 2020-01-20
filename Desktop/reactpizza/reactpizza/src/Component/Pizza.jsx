import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
function Pizza() {
    //const [count, setCount] = useState(0);

    return (
        <div>
            <div className="container">
                <div className="pizza">

                    <div className="small-pizza">
                        <FontAwesomeIcon icon={faPizzaSlice} id="xs" />
                        <h3 id="small">SMALL</h3>
                    </div>
                    <div className="medium-pizza">

                        <FontAwesomeIcon icon={faPizzaSlice} id="sm" size="2x" />
                        <h3 id="medium">MEDIUM</h3>

                    </div>
                    <div className="large-pizza">
                        <FontAwesomeIcon icon={faPizzaSlice} id="lg" size="3x" />
                        <h3 id="large">LARGE</h3>

                    </div>
                    <button id="small-minus" > <FontAwesomeIcon icon={faMinusCircle} size="2x" /></button>
                    <button id="small-plus"  ><FontAwesomeIcon icon={faPlusCircle} size="2x" /></button>
                    <button id="medium-minus"  > <FontAwesomeIcon icon={faMinusCircle} size="2x" /></button>
                    <button id="medium-plus"  ><FontAwesomeIcon icon={faPlusCircle} size="2x" /></button>
                    <button id="large-minus" > <FontAwesomeIcon icon={faMinusCircle} size="2x" /></button>
                    <button id="large-plus" ><FontAwesomeIcon icon={faPlusCircle} size="2x" /></button>
                    <h2><span id="smallvalue">0</span></h2>
                    <h2><span id="mediumvalue">1</span></h2>
                    <h2><span id="largevalue">0</span></h2>

                </div>
                
                



            </div>
                </div>
                );
            }
            
export default Pizza;