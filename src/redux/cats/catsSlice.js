import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { addOffice, addCat } from "./catsOperations";
import { nanoid } from "nanoid";

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
          fact: "Fdfdsfdfggdggd",
        },
      ],
      id: "pkoDkcUjGns",
    },
    {
      officeName: "Кабінет",
      data: [
        {
          catName: "Мурзик",
          breed: "Мейкун",
          years: 1,
          receiving: "03.01.2024",
          fact: "Fdfdsfdfggdggd",
        },
      ],
      id: "sdfsdfpkdsfoDkcUjGns",
    },
  ],
};

const catsSlice = createSlice({
  name: "cats",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(addOffice.fulfilled, (state, action) => {
        state.offices = [...state.offices, { ...action.payload, id: nanoid() }];
      })
      .addCase(addCat.fulfilled, (state, action) => {
        const selectedOffice = state.offices.find(
          (office) => office.id === action.payload.selectedItem
        );

        if (selectedOffice) {
          selectedOffice.data = [...selectedOffice.data, action.payload.data];
        }
      }),
});

export const catsReducer = catsSlice.reducer;

export const catsPersistConfig = {
  key: "cats",
  storage,
};
