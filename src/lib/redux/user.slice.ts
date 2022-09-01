import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getWithExpiry, initialUser, setWithExpiry } from "../initialData";
import AsyncStorage from "@react-native-async-storage/async-storage";

const init = getWithExpiry("user");
const user = init !== null ? init : initialUser;
const initialState: UserInit = { user };

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action: PayloadAction<User>) {
            const expiryTime = setWithExpiry();
            state.user = action.payload;
            state.user.expiryTime = expiryTime;
            AsyncStorage.setItem("user", JSON.stringify(state.user));
        },
        update(state, action: PayloadAction<User>) {
            state.user = { ...state.user, ...action.payload };
            AsyncStorage.setItem("user", JSON.stringify(state.user));
        },
        logout(state) {
            state.user = initialUser;
            AsyncStorage.removeItem("user");
        },
    },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
