import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/Colors";
import { relativeHeightPercent } from "../../../utils/CustomerStyles";

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: Colors.MainColor,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.MainColor,
    },
    inner: {
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 38,
        paddingBottom: relativeHeightPercent(12),
        paddingTop: relativeHeightPercent(8),
    },
    header: {
        lineHeight: 36,
        fontSize: 28,
        color: Colors.FontMainColor,
    },
    center: {
        alignItems: "center",
    },
});
