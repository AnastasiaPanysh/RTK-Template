import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { calculate } from '../slice/calculatorSlice'


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
    res: {
        marginTop: '10%'
    },
    btns: {
        marginTop: '10%',
        display: 'grid',
        gridTemplateColumns: '90px 90px 90px 90px',
        gridGap: '10px',
    },
};


function Calculator() {
    const count = useSelector(state => state.calculator.value)
    const [input, setInput] = useState('');
    const dispatch = useDispatch()


    function doConcatenation(event) {
        setInput(input.concat(event.target.value));
    };

    function clear() {
        setInput('');
    };

    return (
        <>
            <h1 style={styles.h}>CALCULATOR</h1>
            <div style={styles.calculator}>
                <input type="text" value={input} />
                <div style={styles.res}>result:{count}</div>

                <div style={styles.btns}>
                    <button value="1" onClick={doConcatenation}>1</button>
                    <button value="2" onClick={doConcatenation}>2</button>
                    <button value="3" onClick={doConcatenation}>3</button>
                    <button value="4" onClick={doConcatenation}>4</button>
                    <button value="5" onClick={doConcatenation}>5</button>
                    <button value="6" onClick={doConcatenation}>6</button>
                    <button value="7" onClick={doConcatenation}>7</button>
                    <button value="8" onClick={doConcatenation}>8</button>
                    <button value="9" onClick={doConcatenation}>9</button>
                    <button value="0" onClick={doConcatenation}>0</button>
                    <button value="+" onClick={doConcatenation}>+</button>
                    <button value="-" onClick={doConcatenation}>-</button>
                    <button value="*" onClick={doConcatenation}>*</button>
                    <button value="/" onClick={doConcatenation}>/</button>
                    <button value="." onClick={doConcatenation}>.</button>
                    <button onClick={clear}>Сброс</button>
                    <button onClick={() => dispatch(calculate(input))}>Вычислить</button>
                </div>
            </div>
        </>
    );
}

export default Calculator;