import { StyleSheet, Text, View, AsyncStorage, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
export default function ShareCycle({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [cycleName, setCycleName] = useState(null);
  const [cycleModel, setCycleModel] = useState(null);
  const [cycleNo, setCycleNo] = useState(null);
  const [price, setPrice] = useState(null);
  const [user, setUser] = useState(null);
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

  const handleCycleShare =async () =>{

    const body = {
      cycleName: cycleName,
      cycleModel: cycleModel,
      cycleNumber: cycleName,
      parkingPlaceLat: location?.coords?.latitude,
      parkingPlaceLong: location?.coords?.longitude,
      perHourPrice: price,
      availability: "true",
    };

    try {
      const response = await fetch(
        `http://192.168.0.105:8080/api/provider/cycle-info/${user._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  const getData = async () => {
    try {
      let stuff = JSON.parse(await AsyncStorage.getItem("data"));
      // Object.keys(stuff).map((key, index) => {
      //   setState({ [key]: stuff[key] });
      // });
      setUser(stuff);
      console.log("stuff from share", stuff);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.location_container}>
      <View style={{
        marginBottom: 50
      }}>
        <Text style={styles.location_text}>Share Your Cycle</Text>
      </View>
      {/* <Text style={styles.location_text2}>Your Location :</Text>
      <Text style={styles.text}>Latitude: {location?.coords?.latitude}</Text>
      <Text style={styles.text}>Longitude: {location?.coords?.longitude}</Text>
      <Text>{errorMsg}</Text> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Cycle Name"
          placeholderTextColor="#003f5c"
          
          onChangeText={(password) => setCycleName(password)}
          value={cycleName}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Cycle Model"
          placeholderTextColor="#003f5c"
          
          onChangeText={(password) => setCycleModel(password)}
          value={cycleModel}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Cycle Number"
          placeholderTextColor="#003f5c"
          
          onChangeText={(password) => setCycleNo(password)}
          value={cycleNo}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Per hour price (Taka)"
          placeholderTextColor="#003f5c"
          
          onChangeText={(password) => setPrice(password)}
          value={price}
        />
      </View>

      <View style={styles.shareButton}>
        <TouchableOpacity style={styles.button} onPress={handleCycleShare}><Text style={styles.shareText}>Share</Text></TouchableOpacity>
      </View>
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
    marginTop: 10,
  },
  location_text2: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  inputView: {
    backgroundColor: "#529ee2",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 10,
    marginStart: 50,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 25,
  },
  shareButton: {
    flex: 1,
    alignItems: "center",
    marginRight: 10,
    marginTop: 20
    
  },
  button: {
    width: 260,
    backgroundColor: "blue",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    borderRadius: 40,
  },
  shareText: {
    fontSize: 22,
    fontWeight: "bold",
    color: 'white'
  },
});
