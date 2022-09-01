import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/Colors";

export const styles = StyleSheet.create({
    center: {
        alignItems: "center",
    },
    underlineStyleBase: {
        width: 56,
        height: 56,
        backgroundColor: Colors.BacgroundInput,
        borderRadius: 12,
        color: Colors.FontMainColor,
        fontSize: 20,
        paddingHorizontal: 16,
        fontFamily: "Manrope-SemiBold",
        fontWeight: "600",
    },
    underlineStyleHighLighted: {
        width: 56,
        height: 56,
        backgroundColor: Colors.BacgroundInput,
        borderRadius: 12,
        color: Colors.FontMainColor,
        fontSize: 20,
        paddingHorizontal: 16,
        fontFamily: "Manrope-SemiBold",
        fontWeight: "600",
        borderWidth: 2,
        borderColor: "#B4C1DC",
    },
    errorInput: {
        borderWidth: 2,
        borderColor: Colors.ErrorColor,
    },
    error: {
        // width: "100%",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        marginTop: 7,
    },
    errorText: {
        color: Colors.ErrorColor,
        fontSize: 18,
        marginLeft: 6,
    },
});
