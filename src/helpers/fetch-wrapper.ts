import { store } from "../lib/redux/store";
export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete,
};
const state = store.getState();

async function get(url: string) {
    const auth = authHeader();
    const requestOptions: RequestInit = {
        method: "GET",
        headers: auth ? auth : {},
    };
    return await fetch(url, requestOptions);
}

async function post(url: string, body: object) {
    const auth = authHeader();
    const requestOptions: RequestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json", ...auth },
        body: JSON.stringify(body),
    };
    return await fetch(url, requestOptions);
}

async function put(url: string, body: object) {
    const auth = authHeader();
    const requestOptions: RequestInit = {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...auth },
        body: JSON.stringify(body),
    };
    return await fetch(url, requestOptions);
}

async function _delete(url: string) {
    const auth = authHeader();
    const requestOptions: RequestInit = {
        method: "DELETE",
        headers: auth ? auth : {},
    };

    return await fetch(url, requestOptions);
}

function authHeader() {
    const user = state.auth.user;
    const isLoggedIn = user && user.token;
    if (isLoggedIn) {
        return { Authorization: `Bearer ${user.token}` };
    } else {
        return false;
    }
}
