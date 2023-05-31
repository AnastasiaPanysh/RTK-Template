// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { change } from "../slice/themeSlice";

const styles = {
    h: {
        textAlign: 'center'
    },
    dark: {
        margin: '3% auto',
        width: '800px',
        height: '400px',
        background: 'pink',
        border: '3px solid #ccc',
    },
    light: {
        margin: '3% auto',
        width: '800px',
        height: '400px',
        background: '#ECF9FF',
        border: '3px solid #ccc',
    },
}

function Theme() {
    const bool = useSelector(state => state.theme.value)
    const dispatch = useDispatch()

    return (
        <>
            <h1 style={styles.h}>THEME</h1>
            <div style={styles[bool ? 'dark' : 'light']}>
                <button onClick={() => dispatch(change())}>поменять тему</button>
            </div>
        </>
    )
}


export default Theme
