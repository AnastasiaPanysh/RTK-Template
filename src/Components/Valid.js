import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { validate } from '../slice/validSlice'

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
}


function Valid() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const res = useSelector(state => state.valid.value)

    return (
        <>
            <h1 style={styles.h}>VALIDATION</h1>
            <div style={styles.calculator}>
                <input type="text" onChange={event => setInput(event.target.value)} />
                <button onClick={() => dispatch(validate(input))}>check email</button>
                <div>answer:{res}</div>
            </div>
        </>
    )
}

export default Valid