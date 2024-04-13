import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "models";

export interface AuthState {
    isLoggedIn: boolean;
    logging?: boolean;
    currentUser?: User;
};

export interface LoginPayLoad {
    userName: string;
    password: string;
};

const initialState: AuthState = {
    isLoggedIn : false,
    logging: false,
    currentUser: undefined
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayLoad>) {
            state.logging = true;
        },
        loginSuccess(state, action: PayloadAction<User>) {
            state.logging = false;
            state.isLoggedIn = true;
            state.currentUser = action.payload;
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.logging = false;
        },
        logout(state) {
            state.logging = false;
            state.isLoggedIn = false;
            state.currentUser = undefined;
        },
    }
});

// Actions
export const authAction = authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectLogging = (state: any) => state.auth.logging;
export const selectCurrentUser = (state: any) => state.auth.currentUser;

// Reducers
const authReducer = authSlice.reducer;
export default authReducer;
