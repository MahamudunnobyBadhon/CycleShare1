import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Profile() {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assests/profileImg.jpg")}
        />
      </View>
      <View style={styles.profileDetails}>
        <Text style={styles.text}>Badhon</Text>
      </View>

      <View style={styles.postDetails}>
        <View style={styles.post}>
          <Text style={styles.text1}> 1</Text>
          <Text style={styles.text}> Cycle Shared</Text>
        </View>
        <View style={styles.post}>
          <Text style={styles.text1}> 2</Text>
          <Text style={styles.text}> Cycle Rent</Text>
        </View>
      </View>

    
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,

    width: "100%",
    paddingBottom: 120,
    alignItems: "center",
  },
  imageContainer: {
    width: "70%",
    margin: "auto",
    height: 200,
  },
  image: {
    width: "80%",
    height: "100%",
    borderRadius: 1000,
    marginLeft: "10%",
  },
  profileDetails: {
    textAlign: "center",
    marginBottom: 10,
  },
  text1: {
    fontSize: 40,
    fontWeight: "bolder",
    textAlign: "center",
  },
  text3: {
    fontSize: 18,
    fontWeight: "bolder",
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  postDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  postDetails2: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#D0DBDF",
    alignItems: "center",
    margin: 10,
  },
  post: {
    flex: 1,
    margin: 10,
    backgroundColor: "#AFEEEE",
    padding: 20,
    borderRadius: 20,
  },

  post2: {
    flex: 1,
    margin: 10,
    backgroundColor: "#91e7b3",
    padding: 5,
    borderRadius: 8,
  },

  post3: {
    flex: 1,
    margin: 10,
    backgroundColor: "#e05252",
    padding: 5,
    borderRadius: 8,
  },
  image1: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
});
