import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistCombineReducers,
} from "reduxjs-toolkit-persist";
import { userReducer } from "./user.slice";
import { authApi } from "./auth.api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
    key: "user",
    storage: AsyncStorage,
};

const _persistedReducer = persistCombineReducers(persistConfig, {
    [authApi.reducerPath]: authApi.reducer,
    auth: userReducer,
});

export const store = configureStore({
    reducer: _persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                /* ignore persistance actions */
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(authApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
