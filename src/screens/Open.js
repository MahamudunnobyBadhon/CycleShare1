import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useNavigationState } from "@react-navigation/native";


export default function ShareYourLocation({ navigation, route }) {
  const [state, setState] = useState(null);
  // const [length, setLength] = useState(null);

  // const routesLength = useNavigationState((s) => setLength(s.routes.length));
  // const [loggedIn, setLoggedIn] = useState(false);

  const { loogedIn } = route?.params || {};
  const getData = async () => {
    try {
      let stuff = JSON.parse(await AsyncStorage.getItem("data"));
      // Object.keys(stuff).map((key, index) => {
      //   setState({ [key]: stuff[key] });
      // });
      console.log("stuff", stuff);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loogedIn) {
    getData();
  }

  useEffect(() => {
    getData();
  }, []);
  // console.log(state);
  return (
    <View style={styles.inputView}>
      <StatusBar style="auto" />
      <Text style={styles.topText}>Welcome to Cycle Share App</Text>
      <Image style={styles.image} source={require("../assests/cycle.gif")} />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate("Share");
        }}
      >
        <Text style={styles.loginText}>Share Cycle</Text>
      </TouchableOpacity>
      {/* <Text>{state}</Text> */}
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate("Rent");
        }}
      >
        <Text style={styles.loginText}>Rent Cycle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topText: {
    fontSize: 20,
    paddingTop: 200,
  },
  image: {
    marginBottom: 40,
    width: "70%",
    marginTop: 30,
    height: 200,
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#AFEEEE",

    width: "100%",

    paddingBottom: 120,
    alignItems: "center",
    paddingTop: 10,
    flex: 1,
  },

  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "dodgerblue",
  },
});
