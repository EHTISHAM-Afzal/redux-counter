import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const [incrementValue, setIncrementValue] = useState(0);
  const addValue = Number(incrementValue) || 0;
  const dispatch = useDispatch();
  return (
    <section>
      
      <div id="main" className="container"   >
        <h2>{count}</h2>
        <div style={{display : "flex" , columnGap : "5px" , justifyContent : "center"  }}>

        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        </div>
      </div>
      <input
        style={{ width: "100px" , height: "30px" , margin : "5px" }}
        type="text"
        value={incrementValue}
        onChange={(e) => setIncrementValue(e.target.value)}
      />
      <div style={{display : "flex" , columnGap : "10px" , justifyContent : "center" ,  }}>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(reset(), setIncrementValue(0))}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default Counter;
