/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface AuthReducer {
    token: string;
}

const initialState: AuthReducer = {
    token: ""
}

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SetAuth: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        }
    }
})

export const {SetAuth} = AuthSlice.actions;

export const GetToken = (state: RootState) => state.auth.token;

export default AuthSlice.reducer;