import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {

  render() {
    const {counters, onDelete, onIncrement} = this.props; 
    return (
      <div>
        <button onClick={this.props.onReset} className="btn-primary btn-sm m-2">
          {" "}
          Reset{" "}
        </button>
        {counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              counter={counter}
            >
            </Counter>
          );
        })}
      </div>
    );
  }
}

export default Counters;
