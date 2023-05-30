import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slice/counterSlice'
import mathSlice from '../slice/mathSlice'
import validSlice from '../slice/validSlice'
import calculatorSlice from '../slice/calculatorSlice'
import themeSlice from '../slice/themeSlice'

export default configureStore({
    reducer: {
        counter: counterSlice,
        math: mathSlice,
        valid: validSlice,
        calculator:calculatorSlice,
        theme:themeSlice
    }
})