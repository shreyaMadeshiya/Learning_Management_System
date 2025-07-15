import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";

const initialState ={
    isLoggedIn:localStorage.getItem('isLoggedIn') == 'true',
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
};
export const createAccount = createAsyncThunk("/auth/signup",async (data,{ rejectWithValue })=>{
    try{
        const res=axiosInstance.post("user/register",data)
         toast.promise(res,{
            loading:"Wait ! creating your account",
            success:(data)=> data?.data?.message || "Account created successfully",
            error:"Failed to create account"
         });
         return (await res).data;
    }
    catch(error){
          toast.error(error?.response?.data?.message || "Something went wrong");
            return rejectWithValue(error?.response?.data);
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
});

export default authSlice.reducer;