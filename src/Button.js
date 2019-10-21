import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div
        style={{
          borderBottomWidth: 3,
          color: this.props.borderColor,
          borderBottomColor: this.props.borderColor,
          borderBottomStyle: "solid",
          width: 75,
          height: 30,
          marginLeft: this.props.marginLeft,
          cursor: "pointer"
        }}
        onClick={this.props.onClick}
      >
        <span style={{ color: this.props.borderColor }}>
          {this.props.buttonText}
        </span>
      </div>
    );
  }
}
