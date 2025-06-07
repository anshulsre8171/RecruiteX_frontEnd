
import { createSlice } from "@reduxjs/toolkit"
const initialState={value:0}
const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        info:(state,action)=>{state.value=action.payload}
        //info:(state,action)=>{state.value=console.log(action.payload,"jjjjjjj")}
          
    }
})
export const{info}=counterSlice.actions
//console.log(info,+"44444444444444");

export default counterSlice.reducer