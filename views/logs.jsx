import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "Anwesh",
          Instrument: "Guitar",
          Job: "Composing"
        },
        {
          name: "Gwarp",
          Instrument: "Trumpet",
          Job: "Orchestra"
        },
        {
          name: "Sarah",
          Instrument: "Violin",
          Job: "Orchestra"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Header />
        <table>
          <tbody>
            {this.state.data.map((person, i) => (
              <TableRow key={i} data={person} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    const myStyle = {
      fontSize: 20,
      color: "#FF0000"
    };
    return (
      <div>
        <h3 style={myStyle}>Performers</h3>
      </div>
    );
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <div>
        <tr>
          <td>{this.props.data.name}</td>
          <td>{this.props.data.Instrument}</td>
          <td>{this.props.data.Job}</td>
        </tr>
      </div>
    );
  }
}

export default App;
