import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyle from "../../../components/GlobalStyle";
import { styles } from "./useStyles";
import { RootStackParamList } from "../../../Routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GlobalSvgSelector } from "../../../assets/icons/GlobalSvgSelector";

type authScreenProp = NativeStackNavigationProp<RootStackParamList, "Auth">;

const MainScreen = () => {
    const navigation = useNavigation<authScreenProp>();

    return (
        <SafeAreaView style={GlobalStyle.body}>
            <Text style={[GlobalStyle.CustomFontExtraBold, styles.header]}>
                Добро пожаловать!
            </Text>

            <View style={styles.footer}>
                <View style={styles.footerLogo}>
                    <GlobalSvgSelector id={"main_logo"} />
                </View>
                <View style={styles.footerWave}>
                    <GlobalSvgSelector id={"footer_wave"} />
                    <View style={styles.padding_horizont}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate("Auth")}
                        >
                            <Text
                                style={[
                                    GlobalStyle.CustomFontExtraBold,
                                    styles.button_label,
                                ]}
                            >
                                Войти
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default MainScreen;
