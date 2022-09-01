import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/Colors";

export const styles = StyleSheet.create({
    textInput: {
        width: "100%",
        height: 62,
        backgroundColor: Colors.BacgroundInput,
        borderRadius: 12,
        color: Colors.FontMainColor,
        fontSize: 20,
        paddingHorizontal: 16,
        fontFamily: "Manrope-SemiBold",
        fontWeight: "600",
    },
    errorInput: {
        borderWidth: 2,
        borderColor: Colors.ErrorColor,
    },
    touchedInput: {
        borderWidth: 2,
        borderColor: "#B4C1DC",
    },
    error: {
        width: "100%",
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
