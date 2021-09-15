import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Story Hub</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "#FFB6C1",
  },
  text: {
    color: "black",
    padding: 14,
    fontSize: 18,
    top: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
})
