import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/'
});

// const { token } = useSelector(state => state.auth);
const setToken = (token) => {
    return instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
    instance.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (body, thunkAPI) => {
        try {
            const response = await instance.post('/users/signup', body);
            setToken(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
//     async (body) => { 
// return await instance.post('/users/signup', body)
// }

export const logIn = createAsyncThunk(
    'auth/logIn',
    async (body, thunkAPI) => {
        try {
            const response = await instance.post('/users/login', body);
            setToken(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const getCurrentUser = createAsyncThunk(
    'auth/getUser',
    async (body, thunkAPI) => {
        try {
            const response = await instance.get('/users/current', body);
            return response.data;
        } catch (error) {
            setToken();
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (token, thunkAPI) => {
        try {
            await instance.post('user/logout', token);
            clearToken();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);