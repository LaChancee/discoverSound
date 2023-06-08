import {useState} from "react";
import {Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import CustomButton from "../component/CustomButton";
import {CommonActions, Link, useNavigation} from "@react-navigation/native";
import {KeyboardAvoidingView} from "react-native";


import axios from "axios";
import userContext from "../contexts/UserContext";
import UserContext from "../contexts/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {userData, setUserData} = userContext(UserContext)
    const [err, setError] = useState("")
    const submit = async () => {


        try {
            const response = await axios.post("https://8830-83-118-208-130.ngrok-free.app/login", {
                email: email,
                password: password
            });

            console.log('ici');
            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [
                        {name: 'Layout'},
                    ],
                })
            );
            AsyncStorage.setItem("token", response.data.token);
        } catch (error) {
            console.log('ici')
            if (error.code === "ERR_BAD_REQUEST") {
                setError("Email ou mot de pass est invalide")
            }
            console.log(error);
        }

    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>

            <View>
                <Text style={styles.text}>
                    Connectez-vous (par pitié)
                </Text>

                <TextInput
                    keyboardType="email-address"
                    placeholder="Votre email"
                    style={styles.textInput}
                    onChangeText={(e) => setEmail(e)}
                />

                <TextInput

                    placeholder="Votre mot de passe"
                    secureTextEntry={true}
                    style={styles.textInput}
                    onChangeText={(e) => setPassword(e)}
                />
                {
                    err &&

                    <Text style={styles.error}>{err}</Text>

                }
                <CustomButton text={"Connectez-vous"} onPress={submit}/>


            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text>Pas encore de compte ? inscrivez-vous dès maintenant</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        alignContent: "center",
        display: "block",
        top: "20%",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#E0E3F4",
        margin: 10,
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 40,
        height: 50,
    },
    text: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    error: {
        color: "#fff00"
    }

});
export default LoginScreen;
