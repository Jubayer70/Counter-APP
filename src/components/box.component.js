import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Box extends Component {
  state = {
    className: "btn btn-danger"
  }
  constructor(props) {
    super(props);
  }

  increment = () => {
    this.props.onIncrement(this.props.id);
  };
    decrement = () => {
    this.props.onDecrement(this.props.id);
  };
  delete = () => {
    /*
      1.first e amake bujhte hone kon box ta delete kortesi
      2.index wala vlaue ta array theke remove kore dite hobe
    */
    const { id } = this.props;
    this.props.onDelete(id);
  }

  render() { 
    return (
        <div>
          <button type="button" className={this.state.className} onClick={this.decrement}> Decrement </button>
          <span className="p-3">{this.props.num}</span>
          <button type="button" className="btn btn-primary" onClick={this.increment}>Increment</button>
          <button type="button" className="btn btn-success ms-2" onClick={this.delete}>Delete</button>
          {/* onClick here used fortaking input and it's calling increment by react*/}
        </div>
    );
  }
}
export default Box;