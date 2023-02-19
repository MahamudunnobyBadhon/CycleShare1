import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import imagePath from "../constants/imagePath";
const Home = ({ navigation, route }) => {
  const { userLat, userLong, provLat, provLong } = route.params;

  const [pickupCords, setPickupCords] = useState(null);

  const [dropLocationCords, setDropLocationCords] = useState(null);

  useEffect(() => {
    setPickupCords({
      latitude: userLat ? userLat : 0,
      longitude: userLong ? userLong : 0,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04,
    }),
      setDropLocationCords({
        latitude: provLat ? provLat - 0.000001 : 0,
        longitude: provLong ? provLong - 0.02 : 0,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
      });

    // setPickupCords({
    //   latitude: 22.463542570971043,
    //   longitude: 91.97412109802445,
    //   latitudeDelta: 0.09,
    //   longitudeDelta: 0.04,
    // }),
    //   setDropLocationCords({
    //     latitude: 22.461004368555464,
    //     longitude: 91.97890615894671,
    //     latitudeDelta: 0.09,
    //     longitudeDelta: 0.04,
    //   });
  }, [userLat, userLong, provLat, provLong]);
  
  // const [state, setState] = useState({
  //   pickupCords: {
  //     latitude: userLat ? userLat : 0,
  //     longitude: userLong ? userLong : 0,
  //     latitudeDelta: 0.09,
  //     longitudeDelta: 0.04,
  //   },
  //   dropLocationCords: {
  //     latitude: provLat ? provLat : 0,
  //     longitude: provLong ? provLong : 0,
  //     latitudeDelta: 0.09,
  //     longitudeDelta: 0.04,
  //   },
  // });

  const mapRef = useRef();
  // const { pickupCords, dropLocationCords } = state;

  const onPressLocation = () => {
    
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
        <TouchableOpacity onPress={onPressLocation} style={styles.inpuStyle}>
          <Text
            style={{
              fontSize: 20,
              color: "black",
              fontWeight: "bold",
            }}
          >
            Book The Cycle
          </Text>
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
    backgroundColor: "#8cd1ea",
    borderRadius: 4,
    borderWidth: 1,
    alignItems: "center",
    height: 48,
    justifyContent: "center",
    marginTop: 16,
  },
});

export default Home;
