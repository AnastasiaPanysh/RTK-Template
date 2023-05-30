import { useState } from "react"

const styles = {
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
    const setTheme = useSelector(state => state.theme.value)
    const dispatch = useDispatch()


    // const [isDark, setIsDark] = useState(false)
    // function change() {
    //     setIsDark(!isDark)
    // }

    return (
        <div style={styles[isDark ? 'dark' : 'light']}>
            <button onClick={dispatch(setTheme())}>поменять тему</button>
        </div>
    )
}


export default Theme
