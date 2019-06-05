import React from "react";
import ReactDOM from "react-dom";
import contacts from "./contacts.json";

import "./index.css";

class Actor extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.pictureUrl} alt={this.props.name} />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity} </td>
      </tr>
    );
  }
}

class Button extends React.Component {
  // constructor(props){
  // super(props)
  // this.state = {
  // }
  // }

  handleClick() {
    
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top5: contacts.splice(0, 5)
    };
  }

  render() {
    return (
      <div>

        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <td>pic</td>
              <td>name</td>
              <td>popularity</td>
            </tr>
          </thead>
          <tbody>
            {this.state.top5.map((actor, i) => {
              console.log(actor);
              return (
                <Actor
                  key={i}
                  name={actor.name}
                  pictureUrl={actor.pictureUrl}
                  popularity={actor.popularity}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
