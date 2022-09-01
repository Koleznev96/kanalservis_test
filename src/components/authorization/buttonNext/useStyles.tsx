import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/Colors";
import { relativeHeightPercent } from "../../../utils/CustomerStyles";

export const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 18,
        width: "100%",
        height: 62,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Colors.SecondaryColor,
        borderRadius: 8,
    },
    button_label: {
        color: Colors.MainColor,
        fontSize: 22,
    },
    loading: {
        width: "100%",
        justifyContent: "center",
    },
});
