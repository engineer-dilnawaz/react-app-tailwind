import { Component, Fragment } from "react";
import withCounter from "./withCounterHOC";

class CounterClick extends Component {
  render() {
    const { name, count, increaseCount } = this.props;
    return (
      <Fragment>
        <h1 id="counter-title">{name}</h1>
        <div className="mt-2">
          <h2
            onClick={increaseCount}
            className="cursor-pointer bg-slate-200 p-4 text-center text-2xl"
          >
            {count}
          </h2>
        </div>
      </Fragment>
    );
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export default withCounter(CounterClick);
