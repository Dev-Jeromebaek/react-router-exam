import React, { Component, createContext } from "react";
import createUseConsumer from "../lib/createUseConsumer";

const Context = createContext();

const { Provider, Consumer: AnotherConsumer } = Context;

class Another extends Component {
  state = {
    number: 1
  };
  actions = {
    increment: () => {
      this.setState(({ number }) => ({ number: number + 1 }));
    }
  };
  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}
/*
function useAnother(WrappedComponent) {
  return function UseAnother(props) {
    return (
      <AnotherConsumer>
        {({ state, actions }) => (
          <WrappedComponent
            number={state.number}
            increment={actions.increment}
          />
        )}
      </AnotherConsumer>
    );
  };
}
*/

const useAnother = createUseConsumer(AnotherConsumer);

export { Another, AnotherConsumer, useAnother };
