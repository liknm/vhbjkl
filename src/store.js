import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import courseSlice from "./slice/courseSlice";
import locationSlice from "./slice/locationSlice";

const store = configureStore({
    reducer: {
        user: userReducer, // 将userSlice添加到Redux store中
        course:courseSlice,
        location:locationSlice
    },
});

export default store;
