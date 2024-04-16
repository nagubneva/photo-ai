import {Button} from "../components";
import {StyleSheet, View} from "react-native";
import * as ImagePicker from "expo-image-picker";

export const UploadPhotoScreen = ({ navigation }) => {
    const onUploadButtonPress = async () => {
         let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });
         if (!result.canceled) {
             const photoUri = result.assets[0].uri;
             navigation.navigate("ChoosingFilterScreen", {
                 photoUri: photoUri
             });
         }
    }
    return (
        <View style={styles.container}>
            <Button text="Загрузить фото" onPress={onUploadButtonPress} style={styles.button}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginBottom: 250,
    }
});

