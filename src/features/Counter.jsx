import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Input, } from "@mui/material";

const Counter = () => {
  const [incrementValue, setIncrementValue] = useState(0);
  const iValue = Number(incrementValue) || 0;
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        Gap: "5px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2" color="initial">
        Redux Counter
      </Typography>
      <Box
        p={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Button
          variant="outlined"
          color="success"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
        <Typography variant="h1" color="initial" sx={{  maxWidth: "70vw" , overflow: "auto" }}>
          {count}
        </Typography>
        <Button
          variant="outlined"
          color="success"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </Box>
      <Input
        type="number"
        value={incrementValue === 0 ? "" : incrementValue}
        onChange={(e) => setIncrementValue(e.target.value)}
      />
      <Box
        p={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Button
          margin="5px"
          variant="outlined"
          color="success"
          onClick={() => dispatch(incrementByAmount(iValue))}
          disabled={incrementValue === 0}
        >
          Add
        </Button>
        <Button
          variant="outlined"
          color="success"
          onClick={() => dispatch(reset(), setIncrementValue(0))}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
