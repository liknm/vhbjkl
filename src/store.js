import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import courseSlice from "./slice/courseSlice";
import locationSlice from "./slice/locationSlice";
import messageSlice from "./slice/messageSlice";
import timeSlice from "./slice/timeSlice";
import dataSlice from "./slice/dataSlice";
import navigationSlice from "./slice/navigationSlice";

const store = configureStore({
    reducer: {
        user: userReducer, // 将userSlice添加到Redux store中
        course: courseSlice,
        location: locationSlice,
        message: messageSlice,
        time: timeSlice,
        data: dataSlice,
        navigation: navigationSlice
    },
});

export default store;
