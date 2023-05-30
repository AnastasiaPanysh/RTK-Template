import { createSlice } from '@reduxjs/toolkit'


const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: false
    },
    reducers: {
        change: (state) => {
            state.value = !state.value
        }
    }

})

export const { change } = themeSlice.actions;
export default themeSlice.reducer;