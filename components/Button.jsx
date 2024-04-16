import {Pressable, Text, StyleSheet} from "react-native";

export const Button = ({text, onPress, style}) => {
    return (
        <Pressable onPress={onPress} style={{...styles.button, ...style}}>
            <Text style={styles.buttonTitle}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 13,
        paddingHorizontal: 35,
        borderRadius: 8,
        backgroundColor: "#659DBD",
    },
    buttonTitle: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
});
