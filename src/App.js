import React from "react";
import Title from "./components/Title";
import Search from "./components/Search";
import "./App.css";
import { createMeteorCount, filterPeriod } from "./utils/utils";
import Timeline from "./components/Timeline";
import Map from "./components/Map";

class App extends React.Component {
  state = {
    lowerLimit: "2000",
    upperLimit: "2012"
  };
  componentDidMount() {
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=50000")
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState({ meteors: result });
      });
  }

  handleSearch = event => {
    event.preventDefault();
    const { target } = event;
    const lowerLimit = target[0].value;
    const upperLimit = target[1].value;
    this.setState({ lowerLimit, upperLimit });
  };

  // showInfo = ({ target }) => {
  //   console.log(target);
  // };

  render() {
    console.log(this.state.lowerLimit);
    return (
      <>
        <div id="navbar">
          <Title />
          <Search handleSearch={this.handleSearch} />
        </div>
        {this.state.meteors ? (
          <main>
            <Timeline
              meteorCount={createMeteorCount(
                this.state.meteors,
                this.state.lowerLimit,
                this.state.upperLimit
              )}
            />
            <Map
              meteors={filterPeriod(
                this.state.meteors,
                this.state.lowerLimit,
                this.state.upperLimit
              )}
              // showInfo={this.showInfo}
            />
          </main>
        ) : null}
      </>
    );
  }
}

export default App;
