import { useState } from "react";
import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../component/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const LoginScreen = () => {
  const navigate = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    await axios.post("https://638d-83-118-208-130.ngrok-free.app/login", { email: email, password: password });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.text}>
            Connectez-vous (tout de suite ou je te fais un câlin)
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
          <CustomButton text={"Connectez-vous"} onPress={submit} />
        </View>
      </TouchableWithoutFeedback>
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
});
export default LoginScreen;
