import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";



axios.defaults.baseURL = "https://connections-api.herokuapp.com"





export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const resp = await axios.get("/contacts")
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkAPI) => {
    try {
        const resp = await axios.post("/contacts", newContact)
        return resp.data
    } catch(error) {
return thunkAPI.rejectWithValue(error.message)
    }
})

 export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
         const resp = await axios.delete(`/contacts/${contactId}`)
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
}
 })

export const updateContact = createAsyncThunk("contacts/updateContact", async (updateData, thunkAPI) => {
    try {
        const resp = await axios.patch(`/contacts/${updateData.id}`,
            updateData.values
        )
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
     }
 })
 
