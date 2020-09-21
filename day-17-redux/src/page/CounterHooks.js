import React from "react";
import { addCounter, minusCounter } from "../redux/actions/counter.actions";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const counterSelector = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log("tes env", process.env.REACT_APP_API_KEY_GOOGLE);
  console.log("tes env2", process.env.REACT_APP_THORIQ);
  return (
    <div>
      <h1>counter hooks</h1>
      <button
        onClick={() => {
          // addCounter();
          dispatch(addCounter());
        }}
      >
        +
      </button>
      {counterSelector}
      <button
        onClick={() => {
          // minusCounter();
          dispatch(minusCounter());
        }}
      >
        -
      </button>
    </div>
  );
}

// const mapStateToProps = ({ counter }) => {
//   return {
//     counter: counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCounter: () => dispatch(addCounter()),
//     minusCounter: () => dispatch(minusCounter()),
//   };
// };

export default Counter;
