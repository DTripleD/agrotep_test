import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import { catsPersistConfig, catsReducer } from "./cats/catsSlice";

export const store = configureStore({
  reducer: {
    cats: persistReducer(catsPersistConfig, catsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
