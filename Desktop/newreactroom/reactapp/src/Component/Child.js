import React from 'react'
const Child = (props) => {
    return (
        <div>
            <div className="head">
                <div className="heading">
                    <div id="people">
                        <i className="fas fa-users fa-2x"></i>
                    </div>
                    <div className="head-title">
                        <h1 id="people-title">Choose number of people</h1>
                    </div>
                </div>

            </div>

            <div className="rooms">
                <div id="bed">
                    <i className="fas fa-bed"></i>

                </div>
                <h2 id="room-text">ROOMS</h2>
                <div className="room-minus">
                    <i id="dec0" className="fas fa-minus-circle fa-2x" onClick={props.roomDecrement}></i>
                </div>
                <h3 id="num0">
                    <span id="numn0"></span>{props.room}</h3>
                <div className="room-plus">
                    <i id="inc0" className="fas fa-plus-circle fa-2x" onClick={props.roomIncrement}></i>
                </div>
            </div>
            <div className="adult">
                <div id="usericon">
                    <i className="fas fa-user-alt"></i>
                </div>
                <h2 id="adult-text">ADULTS</h2>
                <div className="minus1">
                    <i id="dec1" className="fas fa-minus-circle fa-2x" onClick={props.adultDecrement} ></i>
                </div>
                <h3 id="num1">
                    <span id="numn1">{props.adult}</span></h3>
                <div className="plus1">
                    <i id="inc1" className="fas fa-plus-circle fa-2x" onClick={props.adultIncrement} ></i>
                </div>

            </div>
            <div className="child">
                <div id="childicon">
                    <i className="fas fa-child"></i>
                </div>
                <h2 id="child-text">CHILDREN</h2>
                <div className="minus2">
                    <i id="dec2" className="fas fa-minus-circle fa-2x" onClick={props.childDecrement}></i>
                </div>
                <h3 id="num2"><span id="numn2">{props.child}</span></h3>
                <div className="plus2">
                    <i id="inc2" className="fas fa-plus-circle fa-2x" onClick={props.childIncrement} ></i>
                </div>
            </div>
        </div>
    )
}
export default Child