import React, { Component } from "react";
import Box from "./box.component";
import "bootstrap/dist/css/bootstrap.min.css"; 

class App extends Component {

  state = {
    boxes: []
  }
  creatBox = () => {
    const { boxes } = this.state;
    this.setState({ boxes: [...boxes, 0] });
    // const arr  = [1,2,3,4,5];
    // const b = [...arr ,0] // b = [1,2,3,4,5,0]
    // Here b is copying all element from arr and adding extra 0 in b.
    // Here ... is known as { spread operator }
  }
  onDelete = id => {
    function filterArray (_, index) {
      if (id === index) return false;
      else return true;
    }
    const updatedBoxes = this.state.boxes.filter(filterArray);
    this.setState({ boxes: updatedBoxes });
  }
  onIncrement = id => {
    const arr = [ ...this.state.boxes ]
    arr[id]++;
    this.setState({ boxes: arr });
  }
  onDecrement = id => {
    const arr = [...this.state.boxes ]
    arr[id]--;
    this.setState({ boxes: arr });
  }

  render() {
    return (
      <div style={{ margin: '10px' }} >
        <button className="btn btn-primary" onClick={this.creatBox}>Add New Box</button>
        <br />
        <br />
        {
          this.state.boxes.map((number, index) => (
              <div key={index}>
              <Box
                num={number}
                id={index}
                onDelete={this.onDelete}
                onIncrement={this.onIncrement}
                onDecrement={this.onDecrement}
              />
                <br />
              </div>
          ))
        }
      </div> 
    );
  }
}

export default App;
