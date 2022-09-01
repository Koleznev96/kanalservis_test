import { StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";

export default StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: Colors.MainColor,
        flexDirection: "column",
        alignItems: "center",
    },
    CustomFontMedium: {
        fontSize: 18,
        fontFamily: "Manrope-Medium",
        fontWeight: "500",
        color: "#fff",
    },
    CustomFontSemiBold: {
        fontSize: 18,
        fontFamily: "Manrope-SemiBold",
        fontWeight: "600",
        color: "#fff",
    },
    CustomFontBold: {
        fontSize: 18,
        fontFamily: "Manrope-Bold",
        fontWeight: "700",
        color: "#fff",
    },
    CustomFontExtraBold: {
        fontSize: 18,
        fontFamily: "Manrope-ExtraBold",
        fontWeight: "800",
        color: "#fff",
    },
});
