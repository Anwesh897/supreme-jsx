// const React = require("react");
import React from "react";

class Hello extends React.Component {
  render() {
    return (
      <div>
        Hello from {this.props.name}
        <Greetings />
        <Poem />
        <Color />
      </div>
    );
  }
}

class Greetings extends React.Component {
  render() {
    return <div>Grettings {this.props.name}</div>;
  }
}

class Poem extends React.Component {
  render() {
    return (
      <div>
        <h3>Do not go gentle into that good night</h3>
        <h3>Old age should burn and rave at close of day</h3>
        <h3>Rage Rage against the dying of the light</h3>
      </div>
    );
  }
}

class Color extends React.Component {
  render() {
    const myStyle = {
      fontSize: 100,
      color: "#FF0000"
    };
    return (
      <div>
        <h3 style={myStyle}>Header</h3>
      </div>
    );
  }
}

export default Hello;
