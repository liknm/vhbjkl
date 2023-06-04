import {createSlice} from "@reduxjs/toolkit";

const initialState = [5, 30]
const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setNavigation: (state, action) => {
            console.log(action.payload)
            state = [...action.payload]
            console.log(state)
        }
    }
})
export default navigationSlice.reducer
export const {setNavigation} = navigationSlice.actions
