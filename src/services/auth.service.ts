import { fetchWrapper } from "../helpers/fetch-wrapper";

const baseUrl = "https://portal2.kanalservis.ru/api";

export const authService = {
    getCode,
    getToken,
};

async function getCode(phone: string) {
    return await fetchWrapper.post(`${baseUrl}/auth/code/`, { phone });
}

async function getToken(phone: string, code: string) {
    return await fetchWrapper.post(`${baseUrl}/auth/token/`, { phone, code });
}
