import AsyncStorage from "@react-native-async-storage/async-storage";

const initialUser = {
    id: 0,
    phone: "",
    first_name: "",
    last_name: "",
    email: "",
    token: "",
    refreshToken: "",
    expiryTime: 0,
};

const sevenDays = 7 * 24 * 60 * 60 * 1000;

function setWithExpiry() {
    const now = new Date();

    return now.getTime() + sevenDays;
}

function getWithExpiry(key: string) {
    let itemStr: string | null = null;
    AsyncStorage.getItem(key).then((res) => {
        itemStr = res;
    });
    if (!itemStr) {
        return null;
    }
    const item = JSON.parse(itemStr);
    // const now = new Date();
    // if (now.getTime() > item.expiry) {
    //     AsyncStorage.removeItem(key);
    //     return null;
    // }
    return item;
}

export { initialUser, sevenDays, getWithExpiry, setWithExpiry };
