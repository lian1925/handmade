import * as React from "react"

export default class About extends React.Component {

  state = {
    date: new Date()
  }
  timer: number = 0;

  componentDidMount() {
    let a = [].map((item, index) => {
      return item.title;
    });
    this.timer = window.setInterval(() => {
      this.setState(
        { date: new Date() }
      )
    }), 1000
  }

  render() {
    return (
      <div>
        <h2>Hello, about page</h2>
        <p>It is {this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}