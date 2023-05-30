import { useDispatch, useSelector } from "react-redux";
import { calculate } from "../slice/mathSlice";
import { useState } from "react";


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

};


function Math() {
    const count = useSelector(state => state.math.value)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    return (
        <>
            <h1 style={styles.h}>MATH</h1>
            <div style={styles.calculator}>
                <input type="text" onChange={event => setInput(event.target.value)} />
                <button onClick={() => dispatch(calculate(input))}>равно</button>
                <div>result: {count}</div>
            </div>
        </>
    );
}

export default Math;
