import React, { Component } from "react";

class Counter extends Component {
  state = {
    // count: this.props.counter.count,
    // tags: ["grocery", "shopping", "bakery"],
    // imageURL: "https://picsum.photos/200",
  };

  renderTags() {
    return this.state.tags.length === 0 ? (
      <p>There are no tags!</p>
    ) : (
      <ul>
        {this.state.tags.map((tag) => {
          return <li key={tag}>{tag}</li>;
        })}
      </ul>
    );
  }

  //   constructor() {
  //       super();
  //       this.handleIncrement = this.handleIncrement.bind(this);
  //       console.log("Constructor: ", this);
  //   }

//   handleIncrement = (event) => {
//     this.setState({ count: this.state.count + 1 });
//   };


  render() {
    return (
      <React.Fragment>
        <h4>Counter# {this.props.counter.id}</h4>
        {/* <img src={this.state.imageURL} alt=""></img> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* {this.state.tags.length === 0 && "Please create new tags!"} */}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btm-small"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2"> Delete </button>
        {/* {this.renderTags()} */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
