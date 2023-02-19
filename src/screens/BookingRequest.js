import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function BookingRequest() {
  const [accepted, setAccepted] = useState(false);
  const [declined, setDeclined] = useState(false);

  return (
    <View>
      <View style={styles.postDetails2}>
        <Image
          style={styles.image1}
          source={require("../assests/profile.jpg")}
        ></Image>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 35,
          }}
        >
          <Text style={styles.text3}>
            Mr. Badhon {"\n"} Requested for a cycle
          </Text>
          <View style={styles.postDetails}>
            <View style={styles.post2}>
              <TouchableOpacity onPress={() => setAccepted(true)}>
                <Text style={styles.text}>
                  {accepted ? "Accepted" : "Accept"}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.post3}>
              <TouchableOpacity onPress={() => setDeclined(true)}>
                <Text style={styles.text}>
                  {declined ? "Declined" : "Decline"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#4da9ea",
                width: 200,
                height: 50,
                marginBottom: 10,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  paddingTop: 10,
                  paddingLeft: 50,
                  paddingBottom: 10,
                }}
              >
                {" "}
                Start Time{" "}
              </Text>
            </TouchableOpacity>
          </View>
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
    marginBottom: 15,
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
    borderRadius: 50,
  },
});
