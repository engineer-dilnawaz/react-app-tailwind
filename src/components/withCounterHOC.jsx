import { Component } from "react";

// eslint-disable-next-line no-unused-vars
const withCounter = (WrappedComponent) => {
  return class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
      this.increaseCount = this.increaseCount.bind(this);
    }

    increaseCount() {
      this.setState({ count: this.state.count + 1 });
    }
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          increaseCount={this.increaseCount}
          hello="Hello world"
          {...this.props}
        />
      );
    }
  };
};
export default withCounter;
