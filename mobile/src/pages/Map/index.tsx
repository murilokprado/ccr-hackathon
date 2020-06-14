import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import {
  Feather as Icon,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Modal from "./Modal";

const points = [
  {
    id: 1,
    latitude: -26.29688,
    longitude: -48.883398,
    name: "Pórtico Opa Bier",
    image_url: "https://picsum.photos/200",
  },
  {
    id: 2,
    latitude: -26.298307,
    longitude: -48.883696,
    name: "Point 2",
    image_url: "https://picsum.photos/201",
  },
  {
    id: 3,
    latitude: -26.300714,
    longitude: -48.883991,
    name: "Point 3",
    image_url: "https://picsum.photos/202",
  },
];

let spots = {
  icon: "hotel",
  description: "Parada",
  visible: false,
  stop: [
    {
      image_url: require("../../assets/parada1.png"),
      km: "5",
      stars: 4,
    },
    {
      image_url: require("../../assets/parada2.png"),
      km: "5",
      stars: 4,
    },
    {
      image_url: require("../../assets/parada3.png"),
      km: "5",
      stars: 4,
    },
  ],
};

const Map = () => {
  const navigation = useNavigation();
  const [visibleState, setVisibleState] = useState(false);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    -26.298754,
    -48.883742,
  ]);

  function handleNavigationBack() {
    navigation.goBack();
  }

  function handleOpenModalStop() {
    spots = { ...spots, visible: spots.visible ? false : true };
    setVisibleState(spots.visible);
    console.log(spots);
  }

  useEffect(() => {}, [visibleState]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBack}>
          <TouchableOpacity onPress={handleNavigationBack}>
            <Icon name="arrow-left" size={30} color="#5B7488" />
          </TouchableOpacity>
        </View>

        <View style={styles.headerBack}>
          <Text style={styles.headerText}>Distância</Text>
          <View style={styles.info}>
            <Icon name="map-pin" style={styles.icon} />
            <Text style={styles.infoText}>1.200 km</Text>
          </View>
        </View>

        <View style={styles.headerBack}>
          <Text style={styles.headerText}>Tempo</Text>
          <View style={styles.info}>
            <MaterialCommunityIcons name="timer" style={styles.icon} />
            <Text style={styles.infoText}>20h</Text>
          </View>
        </View>
      </View>
      <View style={styles.emergency}>
        <RectButton
          style={[
            styles.button,
            { backgroundColor: "#EF5B5B", alignItems: "center" },
          ]}
          onPress={() => {}}
        >
          <FontAwesome name="exclamation" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Emergência</Text>
        </RectButton>
      </View>
      <View style={styles.mapContainer}>
        {initialPosition[0] !== 0 && (
          <MapView
            style={styles.map}
            loadingEnabled={initialPosition[0] === 0}
            initialRegion={{
              latitude: initialPosition[0],
              longitude: initialPosition[1],
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
          >
            {points.map((point) => (
              <Marker
                key={String(point.id)}
                style={styles.mapMarker}
                onPress={() => {}}
                coordinate={{
                  latitude: point.latitude,
                  longitude: point.longitude,
                }}
              >
                <View style={styles.mapMarkerContainer}>
                  <Image
                    style={styles.mapMarkerImage}
                    source={{
                      uri: point.image_url,
                    }}
                  />
                  <Text style={styles.mapMarkerTitle}>{point.name}</Text>
                </View>
              </Marker>
            ))}
          </MapView>
        )}
      </View>

      {!visibleState && (
        <View style={styles.footer}>
          <RectButton
            style={[
              styles.button,
              { backgroundColor: "#5B7488", alignItems: "center" },
            ]}
            onPress={() => {}}
          >
            <MaterialCommunityIcons
              name="gas-station"
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Abastecer</Text>
          </RectButton>

          <RectButton
            style={[
              styles.button,
              { backgroundColor: "#FFBA49", alignItems: "center" },
            ]}
            onPress={handleOpenModalStop}
          >
            <MaterialCommunityIcons name="hotel" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Paradas</Text>
          </RectButton>
        </View>
      )}
      <Modal {...spots} />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
    paddingTop: Constants.statusBarHeight,
  },
  mapContainer: {
    flex: 1,
    width: "100%",
    borderRadius: 0,
    overflow: "hidden",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  mapMarker: {
    width: 90,
    height: 80,
  },
  mapMarkerContainer: {
    width: 90,
    height: 70,
    backgroundColor: "#34CB79",
    flexDirection: "column",
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
  },
  mapMarkerImage: {
    width: 90,
    height: 45,
    resizeMode: "cover",
  },
  mapMarkerTitle: {
    flex: 1,
    fontFamily: "Roboto_400Regular",
    color: "#FFF",
    fontSize: 13,
    lineHeight: 23,
  },
  button: {
    flexDirection: "row",
    width: 143,
    height: 55,
    borderRadius: 12,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
    color: "#FFFFFF",
  },
  header: {
    zIndex: 1,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 70,
    marginTop: Constants.statusBarHeight,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, .7)",
    borderRadius: 10,
  },
  headerBack: {},
  emergency: {
    paddingTop: 80 + Constants.statusBarHeight,
    zIndex: 1,
    position: "absolute",
    alignSelf: "center",
  },
  info: {
    flexDirection: "row",
  },
  headerText: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    color: "#445766",
    alignSelf: "center",
  },
  infoText: {
    marginLeft: 5,
    fontFamily: "Roboto_400Regular",
    color: "#5B7488",
    marginTop: 5,
  },
  icon: {
    fontSize: 15,
    color: "#5B7488",
    marginTop: 5,
  },
  footer: {
    zIndex: 1,
    position: "absolute",
    flexDirection: "row",
    alignContent: "flex-end",
    justifyContent: "space-between",
    width: "100%",
    height: 70,
    padding: 40,
    borderRadius: 10,
    bottom: 50,
  },
  buttonIcon: {
    fontSize: 25,
    color: "#f5f5f5",
    marginLeft: 20,
  },
});
