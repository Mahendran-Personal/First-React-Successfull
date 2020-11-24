import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./hello";
import Flexi from "./flexi";
import "./style.css";

const flexiConfig = {
  items: [
      {
        "name": "person_name",
        "label": "Person's Name",
        "type": 'TextField',
      },
      {
        "name": "states",
        "label": "Person's state",
        "type": "DropDown",
            "values": [
            "Maharashtra",
            "Kerala",
            "Tamil Nadu"
            ]
      }
    ]
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      place: 'somewhere',      
    };
  }

  onFlexSubmit = (val) => {
    this.setState({ name: val.name, place: val.dd });
  }

  render() {
    return (
      <div>
        <Flexi onSubmitFn={this.onFlexSubmit} config={flexiConfig.items} />
        <Hello name={this.state.name} place={this.state.place} />
        <button type='button' id='myBtn'>test</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
