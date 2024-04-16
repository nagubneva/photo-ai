import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Filter} from "../components";
import {filters} from "../filters";

export const ChoosingFilterScreen = ({route, navigation}) => {
    const {photoUri} = route.params;

    const onFilterPress = (model, prompt) => {
        navigation.navigate("ResultScreen", {
            model: model,
            prompt: prompt,
            photoUri: photoUri
        })
    }

    return (
        <View style={styles.container}>
            <Image source={{uri: photoUri}} style={styles.image}></Image>
            <SafeAreaView>
                <ScrollView horizontal style={styles.filters}>
                    {filters.map((filter, index) => {
                        return <Filter
                            key={index}
                            name={filter.name}
                            source={filter.image}
                            onPress={() => onFilterPress(filter.model, filter.prompt)}
                        />
                    })}
                </ScrollView>
            </SafeAreaView>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: "100%",
        height: 500,
    },
    filters: {
        width: "100%",
    }
});
