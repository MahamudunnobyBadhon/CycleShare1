import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

export default function RentCycle({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [data, setData] = useState(null);
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

  const getAvailableCycle = async () => {
    const body = {
      userPlaceLat: location?.coords?.latitude,
      userPlaceLong: location?.coords?.longitude,
      distance: 5,
    };

    try {
      const response = await fetch(
        "http://192.168.0.105:8080/api/nearBy/cycle-info",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const json = await response.json();
      const data = json.data;
      console.log("rent cycle",data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getAvailableCycle();
  }, [navigation]);

  return (
    <ScrollView style={styles.location_container}>
      <Text style={styles.location_text}>Near By Available Cycles: </Text>
      <Text style={styles.location_text}>Total Found: {data?.length} </Text>
      <View style={{ marginTop: 15, marginBottom: 50 }}>
        {data?.map((d) => {
          return (
            <View
              key={d._id}
              style={{
                backgroundColor: "white",
                marginRight: 15,
                marginBottom: 15,
                padding: 15,
                borderRadius: 20,
              }}
            >
              <View style={styles.cycleImg}>
                <Image
                  source={require("../assests/cycle.png")}
                  style={styles.cycleImg1}
                ></Image>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    flex: 1,
                    marginLeft: 30,
                  }}
                >
                  {d?.cycleModel}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    flex: 1,
                    marginRight: 30,
                    paddingLeft: 60,
                  }}
                >
                  No: {d?.cycleNumber}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    flex: 1,
                    marginLeft: 30,
                    paddingTop: 12,
                    marginTop: 5,
                  }}
                >
                  {d?.perHourPrice}Tk
                </Text>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    marginRight: 30,
                    backgroundColor: "#c292f0",
                    width: 200,
                    height: 50,
                    borderRadius: 50,
                    marginTop: 5,
                  }}
                  onPress={() => {
                    navigation.navigate("Route", {
                      userLat: location?.coords?.latitude,
                      userLong: location?.coords?.longitude,
                      provLat: d.parkingPlaceLat,
                      provLong: d.parkingPlaceLong,
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      paddingLeft: 42,
                      paddingTop: 10,
                      color: "white",
                    }}
                  >
                    Route
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
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
  cycleImg: {
    width: 400,
    height: 220,
  },
  cycleImg1: {
    width: "88%",
    height: 220,
  },
});
