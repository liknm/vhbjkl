import {createSlice} from "@reduxjs/toolkit";
const initialState={
    message:'you r fucked',
    type:'warning'
}
const messageSlice=createSlice({
    name:'message',
    initialState,
    reducers:{
        setMessage:(state, action)=>{
            state.message=action.payload.message
            state.type=action.payload.message
        },
        resetMessage:(state, action)=>{
            state.message=null
            state.type=null
        }
    }
})

export default messageSlice.reducer
export const {setMessage,resetMessage}=messageSlice.actions
