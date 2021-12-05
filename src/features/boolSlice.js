import {createSlice} from "@reduxjs/toolkit";

const mySlices = createSlice({
    name: 'myVar',
    initialState: {
        myBool:false
    },
    reducers: {
        opposite(state, action) {
            state.myBool = action.payload;
        }
    }
})

export const {opposite} = mySlices.actions

export default mySlices.reducer;