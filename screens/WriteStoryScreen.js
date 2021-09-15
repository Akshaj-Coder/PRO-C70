import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class WriteStoryScene extends React.Component {
  render() {
    return (
      <View>
        <TextInput style={styles.storyTitle} placeholder="Story Title" />

        <TextInput style={styles.author} placeholder="Author" />

        <TextInput
          style={styles.writeYourStory}
          placeholder="Write your story"
        />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: "#FFB6C1",
    width: 100,
    height: 50,
    justifyContent: "center",
    alignContent: "center",
    left: 140,
    top: 200,
    borderWidth: 2,
    borderRadius: 20,
  },

  author: {
    marginTop: 50,
    width: "80%",
    alignSelf: "center",
    height: 40,
    textAlign: "center",
    borderWidth: 4,
    // outline: "none",
  },

  writeYourStory: {
    marginTop: 50,
    width: "80%",
    height: "40%",
    alignSelf: "center",
    height: 40,
    textAlign: "center",
    borderWidth: 4,
    // outline: "none",
  },

  storyTitle: {
    marginTop: 50,
    width: "80%",
    alignSelf: "center",
    height: 40,
    textAlign: "center",
    borderWidth: 4,
    // outline: "none",
  },
});
