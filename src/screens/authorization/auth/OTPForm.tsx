import React, { useState } from "react";
import { Text, View } from "react-native";
import GlobalStyle from "../../../components/GlobalStyle";
import { styles } from "./useStyles";
import { ButtonNext } from "../../../components/authorization/buttonNext/ButtonNext";
import { OTPInput } from "../../../components/authorization/otpInput/OTPInput";
import Timer from "../../../components/authorization/timer/Timer";

interface Props {
    verifyCode: (code: string) => Promise<string>;
    submitPhoneNumber: () => Promise<string>;
}

export const OTPForm = ({ verifyCode, submitPhoneNumber }: Props) => {
    const [code, setCode] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const clearError = () => {
        setError("");
    };

    const codeChange = (value: string) => {
        clearError();
        setCode(value);
    };

    const buttonHandler = async () => {
        setIsSubmitting(true);
        const response = await verifyCode(code);
        setError(response);
        setIsSubmitting(false);
    };

    const resendCode = async () => {
        const response = await submitPhoneNumber();
        setError(response);
    };

    return (
        <>
            <Text style={[GlobalStyle.CustomFontExtraBold, styles.header]}>
                Введите пришедший вам код
            </Text>
            <View style={styles.center}>
                <OTPInput value={code} setValue={codeChange} error={error} />
                <Timer resendCode={resendCode} />
            </View>
            <ButtonNext
                label="Далее"
                change={buttonHandler}
                isSubmitting={isSubmitting}
            />
        </>
    );
};
