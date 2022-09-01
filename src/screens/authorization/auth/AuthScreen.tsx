import React from "react";
import {
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard,
} from "react-native";
import { styles } from "./useStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useActions } from "../../../lib/hooks/actions";
import { useAppSelector } from "../../../lib/hooks/redux";
import useAuthSection from "../useAuthSection";
import { PhoneNumberForm } from "./PhoneNumberForm";
import { OTPForm } from "./OTPForm";

interface Props {
    update: ActionCreatorWithPayload<User, string>;
    login: ActionCreatorWithPayload<User, string>;
}

const AuthScreen = () => {
    const { update, login }: Props = useActions();
    const { user }: UserInit = useAppSelector((state) => state.auth);

    const { verifyCode, submitPhoneNumber } = useAuthSection({
        user,
        update,
        login,
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        {user.phone ? (
                            <OTPForm
                                verifyCode={verifyCode}
                                submitPhoneNumber={submitPhoneNumber}
                            />
                        ) : (
                            <PhoneNumberForm
                                submitPhoneNumber={submitPhoneNumber}
                                phone={user.phone}
                            />
                        )}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default AuthScreen;
