import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, View } from "react-native";
import { GlobalSvgSelector } from "../../../assets/icons/GlobalSvgSelector";
import { Colors } from "../../../utils/Colors";
import GlobalStyle from "../../GlobalStyle";
import { styles } from "./useStyles";

interface Props {
    label: string;
    change: () => void;
    isSubmitting: boolean;
}

export const ButtonNext = (props: Props) => {
    const { label, change, isSubmitting } = props;
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                !isSubmitting ? change() : null;
            }}
        >
            {!isSubmitting ? (
                <>
                    <Text
                        style={[
                            GlobalStyle.CustomFontExtraBold,
                            styles.button_label,
                        ]}
                    >
                        {label}
                    </Text>
                    <GlobalSvgSelector id={"button_arrow_right"} />
                </>
            ) : (
                <View style={styles.loading}>
                    <ActivityIndicator size={48} color={Colors.MainColor} />
                </View>
            )}
        </TouchableOpacity>
    );
};
