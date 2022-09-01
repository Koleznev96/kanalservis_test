import React, { useState, useEffect, useRef } from "react";
import { Text, TouchableOpacity } from "react-native";
import GlobalStyle from "../../GlobalStyle";
import { styles } from "./useStyles";

interface Props {
    initialMinutes?: number;
    initialSeconds?: number;
    resendCode: () => Promise<void>;
}

const Timer = (props: Props) => {
    const defaultTime = { min: 2, sec: 0 };
    const {
        initialMinutes = defaultTime.min,
        initialSeconds = defaultTime.sec,
        resendCode,
    } = props;

    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isTimeOver, setTimeOver] = useState<boolean>(false);

    const intervalRef: { current: number | null } = useRef(null);
    const startDate = useRef(new Date().getTime() / 1000);

    const sendCode = async () => {
        await resendCode();
        setMinutes(defaultTime.min);
        setSeconds(defaultTime.sec);
        setTimeOver(false);
        startInterval();
    };

    const startInterval = () => {
        startDate.current = Math.floor(new Date().getTime() / 1000);
        intervalRef.current = setInterval(() => {
            const time_seconds =
                Math.round(new Date().getTime() / 1000) - startDate.current;
            const ldMinutes = Math.floor(time_seconds / 60);
            const minutes =
                initialMinutes === 0
                    ? initialMinutes - ldMinutes
                    : initialMinutes - ldMinutes - 1;
            const seconds = 60 - (time_seconds - ldMinutes * 60);
            if (minutes < 0 || (seconds <= 0 && minutes <= 0)) {
                clearInterval(intervalRef.current as number);
                setTimeOver(true);
            } else {
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 500);
    };

    useEffect(() => {
        startInterval();
        return () => {
            clearInterval(intervalRef.current as number);
        };
    }, []);

    return (
        <TouchableOpacity
            style={styles.timer}
            disabled={!isTimeOver}
            onPress={sendCode}
        >
            <Text
                style={[
                    GlobalStyle.CustomFontSemiBold,
                    styles.timerText,
                    { color: isTimeOver ? "#295ba0" : "#5c6880" },
                ]}
            >
                {`Отправить код повторно ${
                    isTimeOver
                        ? ""
                        : `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
                }`}
            </Text>
        </TouchableOpacity>
    );
};

export default Timer;
