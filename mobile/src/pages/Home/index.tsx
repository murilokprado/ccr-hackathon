import React, { useState, useEffect } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Alert, Image } from "react-native";
import * as Location from "expo-location";
import { RectButton } from "react-native-gesture-handler";

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

  const [city, setCity] = useState("");
  const [state, setState] = useState("");

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

      setCity(address[0].city ? address[0].city : "Joinville");
      setState(address[0].region ? address[0].region : "Santa Catarina");
    }

    loadLocation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="info" size={30} style={styles.infoIcon} />
        <Icon name="map-pin" size={15} style={styles.mapPinIcon} />
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.state}>, {state}</Text>
        <Image
          source={require("../../assets/roberto.jpeg")}
          style={styles.image}
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

      <View style={styles.containerButtons}>
        <RectButton style={styles.buttonMap} onPress={() => {}}>
          <Icon name="info" size={10} />
          <Text style={styles.buttonText}>Mapa</Text>
        </RectButton>

        <RectButton style={styles.buttonStop} onPress={() => {}}>
          <Icon name="info" size={10} />
          <Text style={styles.buttonText}>Paradas</Text>
        </RectButton>

        <RectButton style={styles.buttonGas} onPress={() => {}}>
          <Icon name="info" size={10} />
          <Text style={styles.buttonText}>Abastecer</Text>
        </RectButton>

        <RectButton style={styles.buttonDiary} onPress={() => {}}>
          <Icon name="info" size={10} />
          <Text style={styles.buttonText}>Diário</Text>
        </RectButton>
      </View>

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
    alignSelf: "center",
    color: "#EB5757",
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "#EB5757",
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  mapPinIcon: {
    alignSelf: "center",
    color: "#80A1C1",
    marginLeft: 20,
    marginTop: 1,
  },
  information: {
    flexDirection: "row",
  },
  city: {
    color: "#80A1C1",
    alignSelf: "center",
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
  },
  state: {
    alignSelf: "center",
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
  },
  image: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: 50,
    height: 50,
    borderRadius: 100,
    marginLeft: 50,
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
  welcome: {
    marginTop: 10,
  },
  containerButtons: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 30,
  },
  buttonMap: {
    flexDirection: "row",
    backgroundColor: "#2D9CDB",
    width: 142,
    height: 57,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonStop: {
    flexDirection: "row",
    backgroundColor: "#FFBA49",
    width: 142,
    height: 57,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 10,
  },
  buttonGas: {
    flexDirection: "row",
    backgroundColor: "#5B7488",
    width: 142,
    height: 57,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonDiary: {
    flexDirection: "row",
    marginLeft: 10,
    backgroundColor: "#FCAE76",
    width: 142,
    height: 57,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    marginTop: 15,
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    color: "#FFFFFF",
  },
  community: {},
  footer: {},
});
