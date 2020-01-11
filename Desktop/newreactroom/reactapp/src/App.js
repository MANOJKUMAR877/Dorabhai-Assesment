import React, { Component } from 'react'
import Child from './Component/Child'
import './App.css';


class App extends Component {
  state = {

    room: 1,
    adult: 1,
    child: 0,

  }
  colorIncrement = () => {
    if (this.state.room === 2) {
      document.querySelector("#dec0").style.color = "#001530";
    }
    else if (this.state.room === 5) {
      document.querySelector("#inc0").style.color = "grey";
    }
  }
  colorDecrement = () => {
    if (this.state.room === 1) {
      document.querySelector("#dec0").style.color = "grey";
    }
    else if (this.state.room === 4) {
      document.querySelector("#inc0").style.color = "red";
    }
  }
  incrementRoom = () => {

    if (this.state.room < 5) {
      if ((this.state.adult + this.state.child) <= this.state.room) {

        this.setState({
          adult: this.state.adult + 1, room: this.state.room + 1
        })
      }
      else {

        this.setState({
          room: this.state.room + 1
        })
        this.setState({
          room: this.state.room + 1
        })
        this.colorIncrement()
        if(this.state.adult===2)
        {
          document.querySelector("#dec1").style.color="#00153D";
        }

      }
    }

  }
  decrementRoom = () => {
    if((this.state.adult+this.state.child)===20)
    {
        document.querySelector("#inc1").style.color="red";
        document.querySelector("#inc2").style.color="red";
    }

    if (this.state.room > 1) {
      if (((this.state.room - 1) * 4) >= this.state.child + this.state.adult) {

        this.setState({
          room: this.state.room - 1
        })

      }
      else {
        let minusvalue = 0
        minusvalue = ((this.state.child + this.state.adult) - ((this.state.room - 1) * 4));
        if (this.state.child < minusvalue) {
          minusvalue = minusvalue - this.state.child;

          this.setState({
            child: 0
          })

          this.setState({
            adult: this.state.adult - minusvalue
          })
        }
        else {

          this.setState({
            child: this.state.child - minusvalue
          })
          
        }

      }
      this.setState({
        room: this.state.room - 1
      })
      this.colorDecrement();
        if(this.state.adult===1)
        {
            document.querySelector("#dec1").style.color="grey";

        }
        if(this.state.child===0)
        {
            document.querySelector("#dec2").style.color="grey";
        }
    }


  }
  incrementAdult = () => {
    if(this.state.adult===1 && this.state.child!==19)
    {
        document.querySelector("#dec1").style.color="#00153D";
    }
     if(this.state.adult+this.state.child===19)
    {
        document.querySelector("#inc1").style.color="grey";
        document.querySelector("#inc2").style.color="grey";
    }

    if (this.state.adult + this.state.child < 20) {
      if (this.state.adult + this.state.child >= 4 * this.state.room) {

        this.setState({
          room: this.state.room + 1, adult: this.state.adult + 1
        })
      }
      else {

        this.setState({
          adult: this.state.adult + 1
        })
      }
      this.setState({
        adult: this.state.adult + 1
      })
      this.colorIncrement();
      if(this.state.adult===2)
     {
      document.querySelector("#dec1").style.color="#00153D";
 
     }
    }
  }
  decrementAdult = () => {
    if((this.state.adult+this.state.child)===20 && this.state.adult!==1)
    {
        document.querySelector("#inc1").style.color="red";
        document.querySelector("#inc2").style.color="red";

    }
    if (this.state.adult > 1) {
      if ((this.state.adult + this.state.child) === this.state.room) {

        this.setState({
          room: this.state.room - 1, adult: this.state.adult - 1
        })

      }
      else {
        this.setState({
          adult: this.state.adult - 1
        })
      }
      this.setState({
        adult: this.state.adult - 1
      })
      this.colorDecrement();
        if(this.state.adult===1)
        {
            document.querySelector("#dec1").style.color="grey";
        }
    }

  }
  incrementChild = () => {
    if((this.state.child===0) && (this.state.rooms+this.state.adult)!==20)
    {
        document.querySelector("#dec2").style.color="#00153D";
    }
    if((this.state.adult+this.state.child)===19)
    {
document.querySelector("#inc1").style.color="grey";
document.querySelector("#inc2").style.color="grey";
    }

    if ((this.state.adult + this.state.child) < 20) {
      if (this.state.adult + this.state.child >= 4 * this.state.room) {

        this.setState({
          room: this.state.room + 1, child: this.state.child + 1
        })
      }
      else {
        this.setState({
          child: this.state.child + 1
        })
      }
      this.setState({
        child: this.state.child + 1
      })
      this.colorIncrement();
     if(this.state.child===2)
     {
         document.querySelector("#dec2").style.color="#00153D";
     }
    }
  }

  decrementChild = () => {
    if((this.state.child!==0) && (this.state.adult+this.state.child)===20)
    {
        document.querySelector("#inc1").style.color="red";
        document.querySelector("#inc2").style.color="red";

    }
    if (this.state.child > 0) {
      if ((this.state.child + this.state.adult) === this.state.room) {

        this.setState({
          room: this.state.room - 1, child: this.state.child - 1
        })
      }
      else {
        this.setState({
          child: this.state.child - 1
        })
      }
      this.setState({
        child: this.state.child - 1
      })
      this.colorDecrement();
        if(this.state.child===0)
        {
            document.querySelector("#dec2").style.color="grey";
        }
    }
 
  }




  render() {
    return (
      <div className="App">
        <Child
          roomIncrement={this.incrementRoom}
          roomDecrement={this.decrementRoom}
          adultIncrement={this.incrementAdult}
          adultDecrement={this.decrementAdult}
          childIncrement={this.incrementChild}
          childDecrement={this.decrementChild}
          room={this.state.room}
          adult={this.state.adult}
          child={this.state.child}>
        </Child>
      </div>
    );
  }
}


export default App;
