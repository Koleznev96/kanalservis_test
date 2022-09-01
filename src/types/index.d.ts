interface User {
    id: number;
    phone: string;
    first_name: string;
    last_name: string;
    email: string;
    token: string;
    refreshToken: string;
    expiryTime: number;
}

interface UserInit {
    user: User;
}

interface OTPInitialState {
    value: string;
    response: string;
}

interface IToken {
    access: string;
    refresh: string;
    detail?: string;
}
