import React, { useState } from "react";
import { View, Text } from "react-native";
import MaskInput from "react-native-mask-input";
import { GlobalSvgSelector } from "../../../assets/icons/GlobalSvgSelector";
import { belFormat, rusFormat } from "../../../utils/validate";
import GlobalStyle from "../../GlobalStyle";
import { styles } from "./useStyles";

interface Props {
    error: string;
    clearError: () => void;
    value: string;
    setValue: (value: string) => void;
}

export const PhoneNumberInput = (props: Props) => {
    const { error, clearError, value, setValue } = props;
    const [phoneNumber, setPhoneNumber] = useState(value);
    const [touched, setTouched] = useState(false);

    const phoneFormat = phoneNumber[1] === "3" ? belFormat : rusFormat;

    const focusHandler = (status: boolean) => {
        clearError();
        setTouched(status);
    };

    return (
        <View>
            <MaskInput
                placeholder="Ваш номер телефона"
                value={phoneNumber}
                style={[
                    styles.textInput,
                    error.length ? styles.errorInput : null,
                    touched ? styles.touchedInput : null,
                ]}
                onFocus={() => focusHandler(true)}
                onBlur={() => focusHandler(false)}
                placeholderTextColor={"#5C6880"}
                onChangeText={(masked, unmasked) => {
                    setPhoneNumber(masked); // (99) 99999-9999
                    setValue(unmasked); // 99999999999
                }}
                mask={phoneFormat}
                keyboardType={"phone-pad"}
            />
            {error.length ? (
                <View style={styles.error}>
                    <GlobalSvgSelector id={"error_notification"} />
                    <Text
                        style={[
                            GlobalStyle.CustomFontSemiBold,
                            styles.errorText,
                        ]}
                    >
                        {error}
                    </Text>
                </View>
            ) : null}
        </View>
    );
};
