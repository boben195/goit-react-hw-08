import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://connections-api.herokuapp.com/contacts"





export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const resp = await axios.get(URL)
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkAPI) => {
    try {
        const resp = await axios.post(URL, newContact)
        return resp.data
    } catch(error) {
return thunkAPI.rejectWithValue(error.message)
    }
})

 export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
         await axios.delete(`${URL}/${contactId}`)
        return contactId
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
}
})
 
