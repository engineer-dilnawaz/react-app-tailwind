/**
 * https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 * Life-cycle method diagram with proper documentations
 *
 * **/

import { Component, Fragment } from "react";

export default class OldCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      //   count2: 0,
    };
    this.timerId = null;

    this.increaseCount = this.increaseCount.bind(this);
    // console.log("constructor"); //1st
  }

  componentDidMount() {
    // console.log("componentDidMount");
    // this.timerId = setInterval(() => {
    //   console.log('hi')
    // }, 1000)
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount");
    // clearInterval(this.timerId)
  }

  //   shouldComponentUpdate(prevProps, newState) {
  //     console.log({ prevProps, newState });
  //     if (newState.count === 2) return false;
  //     return true;
  //   }

  increaseCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    // console.log("render"); //2nd
    const { name } = this.props;
    const { count } = this.state;
    return (
      <Fragment>
        <h1 id="counter-title">{name}</h1>
        <div className="mt-2 flex items-center gap-4">
          <button
            className="cursor-pointer rounded bg-blue-400 px-4 py-1"
            // onClick={() => {
            //   this.setState({ count: count - 1 });
            // }}
            onClick={function () {
              this.setState({ count: count - 1 });
            }.bind(this)}
          >
            -
          </button>
          <h2>{count}</h2>
          <button
            className="cursor-pointer rounded bg-blue-400 px-4 py-1"
            // onClick={() => {
            //   this.setState({ count: count + 1 });
            // }}
            // onClick={this.increaseCount.bind(this)}
            onClick={this.increaseCount}
          >
            +
          </button>
        </div>
        {/* <div className="mt-2 flex items-center gap-4">
          <button
            className="cursor-pointer rounded bg-blue-400 px-4 py-1"
            onClick={() => {
              this.setState({ count2: count2 - 1 });
            }}
          >
            -
          </button>
          <h2>{count2}</h2>
          <button
            className="cursor-pointer rounded bg-blue-400 px-4 py-1"
            onClick={() => {
              this.setState({ count2: count2 + 1 });
            }}
          >
            +
          </button>
        </div> */}
      </Fragment>
    );
  }
}
