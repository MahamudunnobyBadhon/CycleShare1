import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function History() {
  const history = [
    {
      id: 1,
      day: "Sunday",
      date: "11/02/2023",
      total: 80,
      pay: true,
      time: "4 Hour ",
    },
    {
      id: 2,
      day: "Monday",
      date: "12/02/2023",
      total: 100,
      pay: false,
      time: "5 Hour ",
    },
  ];
  return (
    <View
      style={{
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
      }}
    >
      {history?.map((h) => {
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
              backgroundColor: "#82c3f0",
              borderRadius: 20,
            }}
          >
            <View
              style={{
                flex: 1,
                margin: 20,
                backgroundColor: "#AFEEEE",
                padding: 20,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {h.day}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: 15,
                }}
              >
                {h.date}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                margin: 20,
                backgroundColor: "#AFEEEE",
                padding: 20,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {h.time}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: 15,
                }}
              >
                {h.pay ? "Paid " : "Earn "}{h.total}Tk
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
