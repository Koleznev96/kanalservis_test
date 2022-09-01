import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

export const styles = StyleSheet.create({
    header: {
        color: "#000000",
    },
    button: {
        height: 62,
        width: "100%",
        backgroundColor: Colors.MainColor,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    button_label: {
        color: Colors.FontHeadColor,
        fontSize: 22,
    },
});
