import "react-native-gesture-handler";
import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../CycleSharingAPP/src/screens/Login";
import SignUp from "../CycleSharingAPP/src/screens/SignUp";
import Location2 from "../CycleSharingAPP/src/screens/Location";
import Open from "./src/screens/Open";
import ShareYourLocation from "../CycleSharingAPP/src/screens/ShareYourLocation";
import * as Location from "expo-location";
import Profile from "./src/screens/Profile";
import ProfileUpdate from "./src/screens/ProfileUpdate";
import ShareCycle from "./src/screens/ShareCycle";
import RentCycle from "./src/screens/RentCycle";
import BookingRequest from "./src/screens/BookingRequest";
import History from "./src/screens/History";
import CurrentLocation from "./src/screens/CurrentLocation";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

Tab.Navigator.defaultProps = {
  headerMode: "none",
};

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

function Root2() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Request" component={BookingRequest} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="ProfileUpdate" component={ProfileUpdate} />
    </Drawer.Navigator>
  );
}

// function Root3() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="ShareCycle" component={ShareCycle} />
//       <Drawer.Screen name="RentCycle" component={RentCycle} />
//       <Drawer.Screen name="Route" component={Home} />
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "red",
            borderRadius: 15,
            height: 200,
            marginBottom: 40,
          },
        }}
      >
        {/* <Stack.Screen name="Cycle Sharing App" component={LandingPage}></Stack.Screen> */}
        <Tab.Screen
          name="Open"
          component={Open}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image
                style={styles.image}
                source={require("../CycleSharingAPP/assets/home.png")}
              />
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name="Share"
          component={ShareCycle}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image
                style={styles.image}
                source={require("../CycleSharingAPP/src/assests/search.png")}
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Rent"
          component={RentCycle}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image
                style={styles.image}
                source={require("../CycleSharingAPP/src/assests/form.png")}
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Route"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image
                style={styles.image}
                source={require("../CycleSharingAPP/assets/map.png")}
              />
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name="User"
          component={Root2}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image
                style={styles.image}
                source={require("../CycleSharingAPP/src/assests/profile.jpg")}
              />
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "red",
  },
  image: {
    width: 40,
    height: 40,
  },
  image2: {
    width: 60,
    height: 40,
  },
});
