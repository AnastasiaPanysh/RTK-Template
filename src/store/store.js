import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slice/counterSlice'
import mathSlice from '../slice/mathSlice'

export default configureStore({
    reducer: {
        counter: counterSlice,
        math: mathSlice
    }
})