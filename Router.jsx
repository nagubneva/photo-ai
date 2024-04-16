import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ChoosingFilterScreen, ResultScreen, UploadPhotoScreen} from "./screens";
import {Button} from "react-native";

const Stack = createNativeStackNavigator();

export const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="UploadPhotoScreen"
                    component={UploadPhotoScreen}
                    options={{
                        title: "PhotoAI"
                    }}
                />
                <Stack.Screen
                    name="ChoosingFilterScreen"
                    component={ChoosingFilterScreen}
                    options={{
                        title: "Выбор фильтра",
                        headerBackTitle: "Назад"
                    }}
                />
                <Stack.Screen
                    name="ResultScreen"
                    component={ResultScreen}
                    options={{
                        title: "Результат",
                        headerBackTitle: "Назад"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
