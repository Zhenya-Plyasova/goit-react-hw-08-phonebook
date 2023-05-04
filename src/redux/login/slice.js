import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logOut, signIn, signUp, getCurrentUser } from "redux/servises/authentification";

const authInitialState = {
    user: null,
    token: '',
    isLoggedIn: false,
    error: null,
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
            .addCase(signIn.fulfilled, handleFulfilled)
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = '';
                state.isLoggedIn = false;
            })
            .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.isLoggedIn = true;            
            })
            .addMatcher(
				isAnyOf(signIn.rejected, signUp.rejected),
				handleRejected
        )
            // .addMatcher(
            //     isAnyOf(signIn.pending)
            // )
    }
});

export const authReducer = authSlice.reducer;