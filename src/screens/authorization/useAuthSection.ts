import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { authService } from "../../services/auth.service";

interface Props {
    user: User;
    update: ActionCreatorWithPayload<User, string>;
    login: ActionCreatorWithPayload<User, string>;
}

const useAuthSection = ({ user, update, login }: Props) => {
    const submitPhoneNumber = async (phone = user.phone) => {
        try {
            const response = await authService.getCode(phone);
            const status = response.status;
            switch (status) {
                case 200:
                    update({ ...user, ...{ phone } });
                    return "";
                case 422:
                case 400:
                    return "Телефон не найден";
                case 429:
                    return "Повторите пожалуйста позже";
                default:
                    return "Ошибка, повторите позже";
            }
        } catch {
            throw new Error();
        }
    };

    const verifyCode = async (code: string) => {
        try {
            const response: Response = await authService.getToken(
                user.phone,
                code
            );
            if (response.status === 200) {
                await updateUser(response);
                return "";
            } else {
                return "Код введен неверно";
            }
        } catch {
            throw new Error();
        }
    };

    const updateUser = async (response: Response) => {
        const { access: token, refresh: refreshToken }: IToken =
            await response.json();
        login({ ...user, ...{ token, refreshToken } });
    };

    return {
        submitPhoneNumber,
        verifyCode,
    };
};

export default useAuthSection;
