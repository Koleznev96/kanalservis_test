import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import GlobalStyle from "../../components/GlobalStyle";
import { styles } from "./useStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useActions } from "../../lib/hooks/actions";

const HomeScreen = () => {
    const navigation = useNavigation();
    const { logout } = useActions();

    return (
        <SafeAreaView style={GlobalStyle.body}>
            <Text style={[GlobalStyle.CustomFontMedium, styles.header]}>
                HomeScreen
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => logout()}>
                <Text
                    style={[
                        GlobalStyle.CustomFontExtraBold,
                        styles.button_label,
                    ]}
                >
                    Выйти
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default HomeScreen;
