import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



axios.defaults.baseURL = "https://connections-api.herokuapp.com"

const setAuthHeader = token => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common["Autorization"] = "";
};


export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => {
    try {
        const resp = await axios.post("/user/signup", newUser)
        setAuthHeader(resp.data.token)
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logIn = createAsyncThunk("auth/login", async (userInfo, thunkAPI) => {
    try {
        const resp = await axios.post("/user/login", userInfo)
        setAuthHeader(resp.data.token)
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})


export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
    try {
        const resp = await axios.post("/user/logOut")
        clearAuthHeader()
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const { auth: { token }, } = thunkAPI.getState()
    setAuthHeader(token)
    const resp = await axios.get("/users/current")
    return resp.data
}, {
    condition: (_, { getState }) => {
        const { auth: { token }, } = getState()
        return token !== null
}})