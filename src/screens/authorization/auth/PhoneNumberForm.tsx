import React, { useState } from "react";
import { Text } from "react-native";
import GlobalStyle from "../../../components/GlobalStyle";
import { styles } from "./useStyles";
import { PhoneNumberInput } from "../../../components/authorization/phoneNumberInput/PhoneNumberInput";
import { ButtonNext } from "../../../components/authorization/buttonNext/ButtonNext";
import { phoneRegExp } from "../../../utils/validate";

interface Props {
    submitPhoneNumber: (phoneNumber: string) => Promise<string>;
    phone: string;
}

export const PhoneNumberForm = ({ submitPhoneNumber, phone }: Props) => {
    const [phoneNumber, setPhoneNumber] = useState(phone ? phone : "");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const clearError = () => {
        setError("");
    };

    const proneNumberChange = (value: string) => {
        clearError();
        setPhoneNumber(value);
    };

    const buttonHandler = async () => {
        setIsSubmitting(true);
        const phone = "+" + phoneNumber.trim();
        if (phone.match(phoneRegExp)) {
            const res = await submitPhoneNumber(phone);
            setError(res);
        } else {
            setError("Номер введен неправильно");
        }
        setIsSubmitting(false);
    };

    return (
        <>
            <Text style={[GlobalStyle.CustomFontExtraBold, styles.header]}>
                Введите свой номер телефона для входа
            </Text>
            <PhoneNumberInput
                value={phoneNumber}
                setValue={proneNumberChange}
                error={error}
                clearError={clearError}
            />
            <ButtonNext
                label="Далее"
                change={buttonHandler}
                isSubmitting={isSubmitting}
            />
        </>
    );
};
