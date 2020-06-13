import React from "react";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";

const Login = () => {
  const navigation = useNavigation();

  function handleNavigationBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <View style={styles.welcome}></View>

      <View style={styles.containerButtons}></View>

      <View style={styles.community}></View>

      <View style={styles.footer}></View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },
  header: {},
  welcome: {},
  containerButtons: {},
  button: {},
  community: {},
  footer: {},
});
