import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { nanoid } from "nanoid";
import persistReducer from "redux-persist/es/persistReducer";

const initialState = {
  offices: [
    {
      officeName: "Кабінет",
      data: [
        {
          catName: "Мурзик",
          breed: "Мейкун",
          years: 2,
          receiving: "03.01.2024",
          fact: "Some default fact",
          id: "pkoDkcUjGnsdsfdsffsd",
        },
      ],
      id: nanoid(),
    },
    {
      officeName: "Кабінет",
      data: [
        {
          catName: "Мурзик",
          breed: "Мейкун",
          years: 1,
          receiving: "03.01.2024",
          fact: "Some default fact",
          id: "pkoDkcUjGnsdsfsdfsfddsffsd",
        },
      ],
      id: nanoid(),
    },
  ],
};

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    addOffice: (state, action) => {
      state.offices = [...state.offices, { ...action.payload, id: nanoid() }];
    },
    addCat: (state, action) => {
      const selectedOffice = state.offices.find(
        (office) => office.id === action.payload.selectedItem
      );

      if (selectedOffice) {
        selectedOffice.data = [
          ...selectedOffice.data,
          { ...action.payload.data, id: nanoid() },
        ];
      }
    },
    deleteCat: (state, action) => {
      const catIdToDelete = action.payload;

      state.offices.forEach((office) => {
        office.data = office.data.filter((cat) => cat.id !== catIdToDelete);
      });
    },
    deleteOffice: (state, action) => {
      const officeIdToDelete = action.payload;

      state.offices = state.offices.filter(
        (office) => office.id !== officeIdToDelete
      );
    },
  },
});

export const catsReducer = catsSlice.reducer;

export const { addOffice, addCat, deleteCat, deleteOffice } = catsSlice.actions;

export const catsPersistConfig = {
  key: "cats",
  storage,
};

export const persistedCatsReducer = persistReducer(
  catsPersistConfig,
  catsReducer
);
