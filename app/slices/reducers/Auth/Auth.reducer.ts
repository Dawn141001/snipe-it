/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IAuth } from "../../../interface/Auth.interface";

const initialState:IAuth={};

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SetAuth: (state, action: PayloadAction<IAuth>) => {
            state = action.payload;
            return state
        }
    }
})

export const {SetAuth} = AuthSlice.actions;

export const GetAuth = (state: RootState) => state.auth;

export default AuthSlice.reducer;