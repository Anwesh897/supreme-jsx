const React = require("react");

class Hello extends React.Component {
  render() {
    return <div>Hello from {this.props.name}</div>;
  }
}

module.exports = Hello;
