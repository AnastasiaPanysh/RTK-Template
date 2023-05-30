import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {validate} from '../slice/validSlice'

function Valid() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const res = useSelector(state => state.valid.value)

    return (
        <div>
            <input type="text" onChange={event => setInput(event.target.value)} />
            <button onClick={()=>dispatch(validate(input))}>check email</button>
            <div>{res}</div>
        </div>
    )
}

export default Valid