import React, { Component } from "react";

import "./App.css";
import CharectersComponent from "./Components/CharectersContainer";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
    input: "",
  };
  componentDidMount() {
    let backendUrl = "https://breakingbadapi.com/api/characters";
    fetch(backendUrl)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          data: data,
        });
      })
      .catch((err) => console.log(err));
  }
  handleOnChange = (e) => {
    this.setState({
      input: e.target.value,
    });
    // console.log("input", this.state.input);
  };
  render() {
    let { input, data } = this.state;
    let dataFilter = data.filter((e) =>
      e.name.toLowerCase().includes(input.toLowerCase())
    );
    console.log("datatfilter", dataFilter);

    return (
      <div className="App">
        <div className="container">
       {/* {console.log(this.state.input)} */}
          <CharectersComponent
            dataFilter={dataFilter}
            data={this.state.data}
            handleOnChange={this.handleOnChange}
            input={this.state.input}
          />
        </div>
      </div>
    );
  }
}

export default App;
