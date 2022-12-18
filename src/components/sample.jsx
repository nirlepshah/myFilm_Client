import React, { Component } from "react";
const beep = new Audio(
  "https://cdn.freesound.org/previews/560/560188_6086693-lq.mp3"
);
export class Sample extends Component {
  constructor() {
    super();
    this.state = { currentDate: new Date() };
  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({ currentDate: new Date() });
    }, 1000);

    this.setState({ interval });
  }
  render() {
    console.log("render");
    return (
      <>
        Hello, {this.props.name}! The time is:
        {this.state.currentDate.toLocaleTimeString()}
      </>
    );
  }
  componentDidUpdate() {
    beep.play();
  }
  omponentWillUnmount() {
    clearInterval(this.state.interval);
    beep.pause();
  }
}
