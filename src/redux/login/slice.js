import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logOut, logIn, signUp, getCurrentUser } from "redux/servises/authentification";

const authInitialState = {
    user: null,
    token: null,
    isLoggedIn: false,
    error: null,
    isRefreshing: false,
};
const handleRejected = (state, { payload }) => {
    state.isLoggedIn = false;
    state.error = payload;
};
const handleFulfilled = (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
};
export const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(signUp.fulfilled, handleFulfilled) 
            .addCase(logIn.fulfilled, handleFulfilled)
            .addCase(logOut.fulfilled, (state) => {
                state.user = null;
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(getCurrentUser.pending, (state) => {
                state.isRefreshing = true;
                state.error = null;
            })
            .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isLoggedIn = true; 
                state.isRefreshing = false;
            })
            .addCase(getCurrentUser.rejected, (state, { payload }) => {
                state.isRefreshing = false;
                state.error = payload.error;
            })
            .addCase(logOut.rejected, (state, { payload }) => {
                state.error = payload.error;
            })
            .addMatcher(
				isAnyOf(logIn.rejected, signUp.rejected),
				handleRejected
        )
    }
});

export const authReducer = authSlice.reducer;