import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
export default function Location() {
  return (
    <View>
    <Text style={styles.topText}>Google Search Location</Text>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true

          console.log(data);
        }}
        query={{
          key: "SGgbvOOFj9FqoA6HQhrCh_hq5Zo0",
        }}
        onFail={(error) => console.error(error)}
      />

      {/* <GooglePlacesAutocomplete
        // ref={ref => {
        //   ref?.setAddressText(value);
        // }}
        // listViewDisplayed={false}
        placeholder="Search"
        textInputProps={{
          placeholderTextColor: "green",
          returnKeyType: "default",
        }}
        onPress={(data, details = null) => {
          // console.log(data);
        }}
        query={{
          key: "SGgbvOOFj9FqoA6HQhrCh_hq5Zo0",
          // components: ':us',
        }}
        autoFocus={false}
        returnKeyType={"default"}
        fetchDetails={true}
        onFail={() => {}}
        onNotFound={() => {}}
        keyboardShouldPersistTaps={"always"}
        keepResultsAfterBlur={true}
        enablePoweredByContainer={false}
        styles={{
          container: {
            flex: 0,
          },
          description: {
            color: "red",
            fontSize: "16px",
          },
          textInput: {
            backgroundColor: "yellow",
            // height: 42,
            borderRadius: 1,
            paddingVertical: 5,
            paddingHorizontal: 10,
            fontSize: "16px",
            borderColor: "black",
            borderWidth: 1,
            flex: 1,
            color: "yellow",
          },
          predefinedPlacesDescription: {
            color: "yellow",
          },
          poweredContainer: {
            justifyContent: "flex-end",
            alignItems: "center",
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderColor: "#c8c7cc",
            borderTopWidth: 0.5,

            backgroundColor: "red",
          },
          row: {
            backgroundColor: "red",
            padding: 13,
            // height: 44,

            flexDirection: "row",
          },
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  topText:{
    fontSize: 20,
    fontWeight: 500
  }
});
