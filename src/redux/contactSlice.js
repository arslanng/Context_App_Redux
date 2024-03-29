import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdapter = createEntityAdapter();
export const contactSelectors = contactAdapter.getSelectors(
  (state) => state.contacts
);

const initialState = contactAdapter.getInitialState();

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: contactAdapter.addOne,
    addContacts: contactAdapter.addMany,
    deleteContact: contactAdapter.removeOne, 
    removeAllContacts: contactAdapter.removeAll,
    updateContact: contactAdapter.updateOne, // veri güncellemek için kullanılır. ilk parametre olarak id, ikinci parametre olarak changes keyi ile değişen değerleri obje olarak alır.
  },
});

export const {
  addContact,
  addContacts,
  deleteContact,
  removeAllContacts,
  updateContact,
} = contactSlice.actions;
export default contactSlice.reducer;
