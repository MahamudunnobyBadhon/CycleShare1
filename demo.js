import React, { useState, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const App = () => {
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
  return (
    <View style={styles.container}>
      <MapView ref={mapRef} style={styles.map} initialRegion={pickupCords}>
        <Marker coordinate={pickupCords}></Marker>
        <Marker coordinate={dropLocationCords}></Marker>
        <MapViewDirections
          origin={pickupCords}
          destination={dropLocationCords}
          apikey="AIzaSyBfNC-SGgbvOOFj9FqoA6HQhrCh_hq5Zo0"
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 40,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default App;
