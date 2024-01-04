import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import { persistedThemeReducer } from "./theme/themeSlice";
import { persistedCatsReducer } from "./cats/catsSlice";

export const store = configureStore({
  reducer: {
    cats: persistedCatsReducer,
    theme: persistedThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
