import React, { Component } from "react";

export default class New extends Component {
  state = {
    name: "Atta",
    age: 12,
    password: "",
    items: []
  };

  render() {
    return (
      <div>
        <input
          onChange={value => {
            this.setState({
              name: value
            });
          }}
        />
      </div>
    );
  }
}
