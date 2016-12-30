import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { counter } = this.state;

    return (
      <header>
        <h2>Webpack is doing its thing with React and ES2015</h2>
        <div>Contador</div>
      </header>
    );
  }
}