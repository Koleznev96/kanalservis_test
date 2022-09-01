import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/Colors";
import { relativeHeightPercent } from "../../../utils/CustomerStyles";

export const styles = StyleSheet.create({
    header: {
        lineHeight: 36,
        fontSize: 28,
        color: Colors.FontMainColor,
        marginTop: relativeHeightPercent(8),
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "#28569D",
        flexDirection: "column",
        alignItems: "center",
        height: relativeHeightPercent(55),
    },
    footerLogo: {
        width: "100%",
        position: "absolute",
        top: -75,
    },
    footerWave: {
        width: "100%",
        position: "absolute",
        alignItems: "center",
        zIndex: 100,
        marginTop: 75,
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
    padding_horizont: {
        paddingHorizontal: 38,
        position: "absolute",
        bottom: relativeHeightPercent(10),
        width: "100%",
    },
});
