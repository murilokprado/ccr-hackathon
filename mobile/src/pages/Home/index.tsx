import React, { useState, useEffect } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Alert, Image } from "react-native";
import * as Location from "expo-location";

interface Address {
  city: string;
  street: string;
  region: string;
  country: string;
  postalCode: string;
  name: string;
}

const Login = () => {
  const navigation = useNavigation();

  const [address, setAddress] = useState("");

  function handleNavigationBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function loadLocation() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Ops....",
          "Precisamos de sua permissão para obter a sua localização"
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      const address: Address[] = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      console.log(address[0]);

      setAddress(
        address[0].city
          ? address[0].city + ", " + address[0].region
          : "Joinville, Santa Catarina"
      );
    }

    loadLocation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="info" size={30} style={styles.infoIcon} />

        <Icon name="map-pin" size={15} style={styles.mapPinIcon} />
        <Text style={styles.city}>{address}</Text>
        <Image
          source={require("../../assets/roberto.jpeg")}
          style={{
            width: 50,
            height: 50,
            borderRadius: 100,
            marginLeft: 50,
          }}
        />
      </View>

      <View style={styles.welcome}>
        <View style={styles.information}>
          <Text style={styles.text}>Olá </Text>
          <Text style={styles.textBold}>Roberto,</Text>
        </View>
        <Text style={styles.description}>
          vamos juntos desbravar este Brasil
        </Text>
      </View>

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
  header: {
    flexDirection: "row",
  },
  infoIcon: {
    color: "#EB5757",
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "#EB5757",
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  mapPinIcon: {
    color: "#80A1C1",
    marginLeft: 20,
    marginTop: 1,
  },
  information: {
    flexDirection: "row",
  },
  city: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
  },
  text: {
    fontSize: 32,
    fontFamily: "Roboto_400Regular",
  },
  textBold: {
    fontSize: 32,
    fontFamily: "Roboto_700Bold",
  },
  description: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
  },
  welcome: {},
  containerButtons: {},
  button: {},
  community: {},
  footer: {},
});
