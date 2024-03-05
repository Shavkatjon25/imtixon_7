import { createSlice } from "@reduxjs/toolkit";


const Omborchi=createSlice({
    name:'ombor',
    initialState:{
        mobil:false,
        destop:false,
        modal:false,
        maxsulotSoni:0,
        Soni:0,
    },
    reducers:{
        Mob:(state)=>{
            state.mobil=!state.mobil
        },
        Des:(state)=>{
            state.destop=!state.destop
        },
        Mod:(state)=>{
            state.modal=!state.modal
        },
        maxSoni:(state, {payload})=>{
            if (state.maxsulotSoni>0 || payload>=0) {
                state.maxsulotSoni=+state.maxsulotSoni+payload
            }else state.maxsulotSoni==0
        },
        Soni:(state, {payload})=>{
            if (state.Soni>0 || payload>0) {
                state.Soni=+state.Soni+payload
            }
        },
        ochr:(state)=>{
            state.maxsulotSoni=0;
        }
    }
})

export default Omborchi