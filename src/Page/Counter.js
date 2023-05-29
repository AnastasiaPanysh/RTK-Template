import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../slice/counterSlice";

function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch(increment())}>+1</button>
      <div>{count}</div>
      <button onClick={() => dispatch(decrement())}>- 1</button>
    </>
  );
}

export default Counter;
