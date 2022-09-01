import React from "react";
import { View, Text } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { GlobalSvgSelector } from "../../../assets/icons/GlobalSvgSelector";
import GlobalStyle from "../../GlobalStyle";
import { styles } from "./useStyles";

interface Props {
    error: string;
    value: string;
    setValue: (value: string) => void;
}

export const OTPInput = (props: Props) => {
    const { error, value, setValue } = props;
    return (
        <View style={styles.center}>
            <OTPInputView
                style={{ minWidth: "80%", height: 56, maxWidth: 284 }}
                placeholderTextColor={"#5C6880"}
                pinCount={4}
                code={value}
                onCodeChanged={(code) => setValue(code)}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
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
