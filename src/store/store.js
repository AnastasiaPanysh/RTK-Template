import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slice/counterSlice'
import mathSlice from '../slice/mathSlice'
import validSlice from '../slice/validSlice'

export default configureStore({
    reducer: {
        counter: counterSlice,
        math: mathSlice,
        valid: validSlice
    }
})