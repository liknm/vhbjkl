import {createSlice} from "@reduxjs/toolkit";
const initialState=[]
const locationSlice=createSlice({
    name:'location',
    initialState,
    reducers:{
        setLocationList:(state, action)=>{
            state=[...action.payload]
        }
    }
})
export default locationSlice.reducer
export const {setLocationList}=locationSlice.actions
