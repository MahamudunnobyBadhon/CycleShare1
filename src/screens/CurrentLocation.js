// import React, { useState, useEffect } from "react";
// import { View, Text, Button, Alert, PermissionsAndroid } from "react-native";
// import Geolocation from "@react-native-community/geolocation";

// const CurrentLocation = () => {
//   const [location, setLocation] = useState({});
//   const [permissionGranted, setPermissionGranted] = useState(false);

//   useEffect(() => {
//     requestLocationPermission();
//   }, []);

//   const requestLocationPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: "Location Permission",
//           message: "This app requires access to your location",
//         }
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         setPermissionGranted(true);
//       } else {
//         Alert.alert("Location permission denied");
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   const handleGetLocation = () => {
//     if (!permissionGranted) {
//       return Alert.alert("Location permission not granted");
//     }
//     Geolocation.getCurrentPosition(
//       (position) => {
//         setLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       },
//       (error) => {
//         Alert.alert(error.message);
//       },
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
//   };

//   return (
//     <View>
//       <Text>Latitude: {location.latitude}</Text>
//       <Text>Longitude: {location.longitude}</Text>
//       <Button title="Get Location" onPress={handleGetLocation} />
//     </View>
//   );
// };

// export default CurrentLocation;
