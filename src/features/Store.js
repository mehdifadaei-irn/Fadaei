import {configureStore} from "@reduxjs/toolkit";
import mySlice from './boolSlice';

const store = configureStore({
    reducer: {
        bool: mySlice,
    }
})

export default store;