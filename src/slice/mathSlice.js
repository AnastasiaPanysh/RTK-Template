import { createSlice } from '@reduxjs/toolkit'


const mathSlice = createSlice({
    name: 'math',
    initialState: {
        value: 0
    },
    reducers: {
        calculate: (state, inp) => {
            state.value = eval(inp.payload)
        }
    }

})

export const { calculate } = mathSlice.actions;
export default mathSlice.reducer;