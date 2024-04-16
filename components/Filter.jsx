import {Pressable, Text, StyleSheet, Image} from "react-native";

export const Filter = ({name, onPress, source, style}) => {
    return (
        <Pressable onPress={onPress} style={{...styles.container, ...style}}>
            <Image source={source} style={styles.image}/>
            <Text style={styles.name}>{name}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingTop: 10,
    },
    image: {
        width: 80,
        height: 110,
        borderRadius: 8,
    },
    name: {
        fontSize: 12,
        lineHeight: 21,
        fontWeight: "bold",
        marginTop: 2,
    },
});
