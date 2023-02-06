import { Image, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Location from "./src/screens/Location";
import LandingPage from "./src/screens/LandingPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Login from "../CycleSharingAPP/src/screens/Login";
import SignUp from "../CycleSharingAPP/src/screens/SignUp";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator>
        {/* <Stack.Screen name="Cycle Sharing App" component={LandingPage}></Stack.Screen> */}
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                style={styles.image}
                source={require("../CycleSharingAPP/assets/home.png")}
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                style={styles.image}
                source={require("../CycleSharingAPP/assets/login.png")}
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="SignUp"
          component={SignUp}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                style={styles.image2}
                source={require("../CycleSharingAPP/assets/signUp.png")}
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Location"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                style={styles.image}
                source={require("../CycleSharingAPP/assets/map.png")}
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
    justifyContent: 'center'
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
