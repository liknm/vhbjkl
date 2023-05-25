import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    username: null,
    userClass: null,
    userGroup: null

}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state, action)=>{
            const user=action.payload
            state.username=user.username
            state.userClass=user.userClass
            state.userGroup=user.userGroup
        },
        clearUser:(state,action)=>{
            state.username=null
            state.userClass=null
            state.userGroup=null
        }
    }
})
export default userSlice.reducer
export const {setUser,clearUser}=userSlice.actions
