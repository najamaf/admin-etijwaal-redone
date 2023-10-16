import { createSlice } from '@reduxjs/toolkit'




const initialState = {
     open: false
}



export const openSlice = createSlice({
    name: 'open',
    initialState,
    reducers: {
        setOpen: (state) => {
            state.open = !state.open;
        }
    }
})

export const { setOpen } = openSlice.actions
export default openSlice.reducer
