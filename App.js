import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ReadStoryScreen from "./screens/ReadStoryScreen";
import WriteStoryScreen from "./screens/WriteStoryScreen";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AppHeader from "./components/AppHeader";

export default class App extends React.Component {
  render() {
    return (
      <>
        <AppHeader />

        <AppContainer />
      </>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    WriteStoryScreen: { screen: WriteStoryScreen },
    ReadStoryScreen: { screen: ReadStoryScreen },
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === "ReadStoryScreen") {
          return (
            <Image
              source={require("./assets/read.png")}
              style={{ width: 40, height: 40 }}
            />
          );
        } else if (routeName === "WriteStoryScreen") {
          return (
            <Image
              source={require("./assets/write.png")}
              style={{ width: 40, height: 40 }}
            />
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(TabNavigator);
