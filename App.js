import LoginScreen from "./src/screen/LoginScreen";
import Register from "./src/screen/Register";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import UserContextProviders, {UserContext} from "./src/contexts/UserContext";
import Layout from "./src/Layout/Layout";
import userContext from "./src/contexts/UserContext";
import {useEffect} from "react";

const Stack = createStackNavigator();

export default function App() {
    const {data, updateData} = userContext(UserContext)
    useEffect(() => {
        console.log(data);
        updateData({
            authenticate: true
        })
    }, [data])

    return (

        <UserContextProviders>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginScreen}/>
                    <Stack.Screen name="Register" component={Register}/>
                    <Stack.Screen
                        name="Layout"
                        component={Layout}
                        options={{
                            headerShown: false, // Masquer l'en-tête (header)
                            initialParams: {user: data},
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UserContextProviders>

    );
}
