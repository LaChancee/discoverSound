import { useState } from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity, Text } from "react-native";

const CustomButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#067783",
    justifyContent: "center",
    padding: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
});

export default CustomButton;
