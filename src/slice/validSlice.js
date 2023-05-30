import { createSlice } from "@reduxjs/toolkit";

const validSlice = createSlice({
    name: 'valid',
    initialState: {
        value: ''
    },
    reducers: {
        validate: (state, inp) => {
            if (/^[a-zA-Z0-9_\-\.]+@[a-z]+\.[a-z]{1,3}$/gm.test(inp.payload))
                state.value = 'почта введена корректно'
            else state.value = 'почта введена некорректно'
        }
    }

})


export const {validate} = validSlice.actions;
export default validSlice.reducer;