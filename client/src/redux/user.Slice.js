import {createSlice} from '@reduxjs/toolkit';

const userSlice=createSlice({
    name:'user',
    initialState:{
currentUser:null,
error:null,
loading:false,
    },
    reducers:{
signInStart:(start)=>{
    start.loading=true;
},
signInSuccess:(state,action)=>{
    state.currentUser=action.payload;
    state.loading=false;
    state.error=null;
},
signInFailuer:(state,action)=>{
    state.error=action.payload;
    state.loading=false;

}
    }
})
export const {signInStart,signInSuccess,signInFailuer}=userSlice.actions;
export default userSlice.reducer;
