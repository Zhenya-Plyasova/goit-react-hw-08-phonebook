import { createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContacts, removeContact } from "redux/servises/operations";

const contactsInitialState = { items: [], isLoading: false, error: null };

const handlePending = state => { state.isLoading = true; };
const handleRejected = (state, { payload }) => {
    state.error = payload;
    state.isLoading = false;   
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.items = payload;
            state.error = null;                   
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.items.push(payload);
            state.error = null;              
        })
        .addCase(addContact.rejected, handleRejected)
        .addCase(removeContact.pending, handlePending)
            .addCase(removeContact.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            const index = state.items.findIndex(item => item.id === payload.id);
            state.items.splice(index, 1);
            state.error = null;               
            })
            .addCase(removeContact.rejected, handleRejected)
        },
    },
);

export const contactsReducer = contactsSlice.reducer;
export const { fetchingInProgress, fetchingRegected, fetchingSuccess } = contactsSlice.actions;