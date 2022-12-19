import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from './counter.actions';

const Counter = ({ counter, increment, decrement, reset }) => {
  // const [counter, setCounter] = useState(0);
  return (
    <div className="counter">
      <button onClick={decrement} className="counter__button">
        -
      </button>
      <span className="counter__value" onClick={reset}>
        {counter}
      </span>
      <button onClick={increment} className="counter__button">
        +
      </button>
    </div>
  );
};

const mapState = (state) => {
  return { counter: state };
};

const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
};

const connector = connect(mapState, mapDispatch);
export default connector(Counter);
