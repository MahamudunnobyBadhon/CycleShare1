import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LandingPage({ navigation }) {
  const onPressLocation = () => {
    navigation.navigate("location");
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assests/cycle.gif")} />
      <StatusBar style="auto" />

      <TouchableOpacity style={styles.loginBtn} onPress={onPressLocation}>
        <Text style={styles.loginText}>Cycle Sharing App</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1819",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    width: "70%",
    height: 120,
    justifyContent: "center",
  },
  loginText: {
    fontSize: 20,
  },
  inputView: {
    backgroundColor: "#AFEEEE",
    borderRadius: 30,
    width: "70%",
    height: 35,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 16,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    backgroundColor: "white",
    borderRadius: 25,
    fontSize: 20,
  },
  loginBtn: {
    width: "60%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
  },
});
