import { useDispatch, useSelector } from "react-redux";
import { calculate } from "../slice/mathSlice";
import { useState } from "react";

function Math() {
    const count = useSelector(state => state.math.value)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    return (
        <div>
            <input type="text" onChange={event => setInput(event.target.value)} />
            <button onClick={()=>dispatch(calculate(input))}>равно</button>
            <div>{count}</div>
        </div>
    );
}

export default Math;
