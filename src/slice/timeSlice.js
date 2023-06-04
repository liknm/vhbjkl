import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentTime: new Date().getTime(),
    accelerated: false,
    paused: false
}
const timeSlice = createSlice({
    name: 'time',
    initialState,
    reducers: {
        resetTime: (state, action) => {
            state.currentTime = new Date().getTime()
        },
        updateTime: (state, action) => {
            if (!state.paused) {
                if (state.accelerated) {
                    state.currentTime += 1800000
                } else {
                    state.currentTime += 500
                }
            }
        },
        setAccelerated: (state, action) => {
            state.accelerated = action.payload
            console.log(action.payload)
        },
        timePause: (state, action) => {
            state.paused = true
            console.log(`pause?${state.pause}`)
        },
        timeStart: (state, action) => {
            state.paused = false
        },
        toggleAccelerated: (state, action) => {
            state.accelerated = !state.accelerated
        }
    }
})
export default timeSlice.reducer
export const {resetTime, toggleAccelerated, updateTime, setAccelerated, timePause, timeStart} = timeSlice.actions
