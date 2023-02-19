// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

// const App = () => {
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);

//   useEffect(() => {
//     Geolocation.getCurrentPosition(
//       // position => {
//         setLatitude(position.coords.latitude);
//         setLongitude(position.coords.longitude);
//       },
//       error => alert(error.message),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {latitude && longitude ? (
//         <Text>
//           Your current location is: {"\n"}
//           Latitude: {latitude}, {"\n"}
//           Longitude: {longitude}
//         </Text>
//       ) : (
//         <Text>Loading...</Text>
//       )}
//     </View>
//   );
// };

// export default App;