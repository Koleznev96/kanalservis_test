import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

export const authApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://portal2.kanalservis.ru/api",
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.user.token;
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (build) => ({
        sendPhone: build.mutation<void, object>({
            query: (body) => ({
                url: "/auth/code/",
                method: "POST",
                body,
            }),
        }),
        sendCode: build.query<IToken, object>({
            query: (body) => ({
                url: "/auth/token/",
                method: "POST",
                body,
            }),
        }),
        getUser: build.query<User, void>({
            query: () => ({
                url: "/users/me/",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetUserQuery } = authApi;
