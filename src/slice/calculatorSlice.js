import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        value: 0
    },
    reducers: {
        calculate: (state, inp) => {
            state.value = eval(inp.payload)
        }
    }
})

export const { calculate } = calculatorSlice.actions;
export default calculatorSlice.reducer;