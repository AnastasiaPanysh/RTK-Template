import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../slice/counterSlice";

const styles = {
  h: {
    textAlign: 'center'
  },
  calculator: {
    width: '400px',
    margin: '3% auto',
    padding: '5%',
    border: '3px solid #ccc',
    borderRadius: '10px',
    background: '#ECF9FF',
  },
  btns: {
    display: 'flex',
    justifyContent: 'space-evenly'

  }
}

function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <h1 style={styles.h}>COUNTER</h1>
      <div style={styles.calculator}>
        <div style={styles.btns} >
          <button style={styles.btn} onClick={() => dispatch(increment())}>+1</button>

          <div>{count}</div>
          <button style={styles.btn} onClick={() => dispatch(decrement())}>- 1</button>
        </div>
      </div>

    </>
  );
}

export default Counter;
