import {Text, View, Image, StyleSheet, Button, Alert} from 'react-native';
import React, {useEffect, useState} from "react";
import * as MediaLibrary from 'expo-media-library';
import {downloadPhoto, uploadPhoto} from "../server";

export const ResultScreen = ({route, navigation}) => {
    const {model, prompt, photoUri} = route.params;

    const [resultPhotoUri, setResultPhotoUri] = useState(null);

    const pollingStopSignal = {
        isSet: false
    };

    const saveToGallery = async (resultPhotoUri) => {
        let permissionResponse = await MediaLibrary.getPermissionsAsync();
        if (permissionResponse.status !== "granted") {
            if (permissionResponse.canAskAgain) {
                permissionResponse = await MediaLibrary.requestPermissionsAsync();
            } else {
                Alert.alert("Ошибка", "Приложению необходимо предоставить доступ к галерее через настройки");
                return;
            }
        }
        if (permissionResponse.status !== "granted") {
            return;
        }
        await MediaLibrary.saveToLibraryAsync(resultPhotoUri);
        Alert.alert("Успешно сохранено!", "Обработанное фото в вашей галерее");
    }

    const showSaveButton = (resultPhotoUri, permissionResponse) => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => saveToGallery(resultPhotoUri, permissionResponse)} title="Сохранить"/>
            ),
        });
    }

    useEffect(() => {
        (async () => {
            try {
                const resultPhotoFilename = await uploadPhoto(photoUri, prompt, model);
                pollingStopSignal.isSet = false;
                const downloadedPhotoUri = await downloadPhoto(resultPhotoFilename, 1000, pollingStopSignal);
                setResultPhotoUri(downloadedPhotoUri);
                showSaveButton(downloadedPhotoUri);
            } catch (e) {
                Alert.alert("Ошибка", "Произошла ошибка, попробуйте позже! Проверьте, что размер фото не превышает 1 МБ.");
                navigation.popToTop();
            }
        })();
    }, []);

    return (
        resultPhotoUri ?
            <Image source={{uri: resultPhotoUri}} style={styles.image}/>
            :
            <View style={styles.container}>
                <Text style={styles.text}>Обработка фото. Пожалуйста, не блокируйте экран и не переходите в другие
                    приложения.</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 17,
        lineHeight: 21,
        fontWeight: "bold",
        marginBottom: 280,
        marginHorizontal: 30,
        textAlign: "center"
    },
    image: {
        flex: 1,
        width: "100%",
        marginBottom: 80,
    }
});
