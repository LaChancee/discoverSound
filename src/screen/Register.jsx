import {Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View} from "react-native";
import {TouchableWithoutFeedback} from "react-native-gesture-handler";
import CustomButton from "../component/CustomButton";
import {useState} from "react";
import axios from "axios";
import {CommonActions, useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = () => {

    const [show, setShow] = useState(false)
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigation = useNavigation();

    const submit = async () => {

        if (password !== confirmPassword) {
            setShow(true)
            return
        }
        try {
            const response = await axios.post("https://8830-83-118-208-130.ngrok-free.app/register", {
                username: username,
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
            console.log(error);
        }
    };

    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <Text style={styles.text}>
                            Inscrivez-vous (par pitié)
                        </Text>
                        <TextInput
                            placeholder="Votre nom d'utilisateur"
                            style={styles.textInput}
                            onChangeText={(e) => setUsername(e)}
                        />
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
                        <TextInput

                            placeholder="Votre mot de passe"
                            secureTextEntry={true}
                            style={styles.textInput}
                            onChangeText={(e) => setConfirmPassword(e)}
                        />
                        {
                            show &&

                            <Text style={styles.error}>Vos mot de passes ne correspondent pas</Text>

                        }
                    </View>
                </TouchableWithoutFeedback>
                <CustomButton text={"Créer votre compte"} onPress={submit}/>

            </KeyboardAvoidingView>

        </>

    )
}


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
        marginTop: 20,
        fontSize: 15,
        textAlign: "center",
        color: "red"
    }
});
export default Register;