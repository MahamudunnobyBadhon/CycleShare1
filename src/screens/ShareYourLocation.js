import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

export default function ShareYourLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log("status", status);
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  console.log("location", location);
  console.log("err", errorMsg);

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.location_container}>
      <View>
        <Text style={styles.location_text}>Share Cycle</Text>
      </View>
      <Text style={styles.location_text}>ShareYourLocation</Text>
      <Text>{location?.coords?.latitude}</Text>
      <Text>{location?.coords?.longitude}</Text>
      <Text>{errorMsg}</Text>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  location_container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    backgroundColor: "#AFEEEE",
  },
  location_text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
