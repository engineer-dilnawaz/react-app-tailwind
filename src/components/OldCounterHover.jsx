import { Component, Fragment } from "react";
import withCounter from "./withCounterHOC";

class OldCounterHover extends Component {
  render() {
    const { name, count, increaseCount } = this.props;

    return (
      <Fragment>
        <h1 id="counter-title">{name}</h1>
        <div className="mt-2">
          <h2
            onMouseEnter={increaseCount}
            className="cursor-pointer bg-green-200 p-4 text-center text-2xl"
          >
            {count}
          </h2>
        </div>
      </Fragment>
    );
  }
}

export default withCounter(OldCounterHover);
