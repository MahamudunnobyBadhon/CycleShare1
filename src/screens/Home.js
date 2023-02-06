import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import imagePath from "../constants/imagePath";
const Home = ({ navigation }) => {
  const [state, setState] = useState({
    pickupCords: {
      latitude: 22.461669641824294,
      longitude: 91.96978900134727,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04,
    },
    dropLocationCords: {
      latitude: 22.44122221538411,
      longitude: 91.91001195668615,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04,
    },
  });

  const mapRef = useRef();
  const { pickupCords, dropLocationCords } = state;

  const onPressLocation = () => {
    navigation.navigate("location");
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <MapView
          ref={mapRef}
          style={StyleSheet.absoluteFill}
          initialRegion={pickupCords}
        >
          <Marker coordinate={pickupCords} image={imagePath.icCurLoc}></Marker>
          <Marker
            coordinate={dropLocationCords}
            image={imagePath.icGreenMarker}
          ></Marker>
          <MapViewDirections
            origin={pickupCords}
            destination={dropLocationCords}
            apikey="AIzaSyAhJ7ype0Lqp-ldfNp_sYOIlwRk4cWC3qk"
            strokeWidth={3}
            strokeColor="hotpink"
            optimizeWaypoints={true}
            onReady={(result) => {
              mapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: 30,
                  bottom: 300,
                  left: 30,
                  top: 100,
                },
              });
            }}
          />
        </MapView>
      </View>
      <View style={styles.bottomCard}>
        <Text>Where are you going..?</Text>
        <TouchableOpacity onPress={onPressLocation} style={styles.inpuStyle}>
          <Text>Choose your location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bottomCard: {
    backgroundColor: "white",
    width: "100%",
    padding: 30,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
  },

  inpuStyle: {
    backgroundColor: "white",
    borderRadius: 4,
    borderWidth: 1,
    alignItems: "center",
    height: 48,
    justifyContent: "center",
    marginTop: 16,
  },
});

export default Home;
