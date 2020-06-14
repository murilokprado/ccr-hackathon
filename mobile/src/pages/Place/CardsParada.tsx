import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo as Icon } from "@expo/vector-icons";

const paradas = [
  {
    image: require("../../assets/parada1.png"),
    km: "265m",
    stars: 5,
  },
  {
    image: require("../../assets/parada2.png"),
    km: "5km",
    stars: 4,
  },
  {
    image: require("../../assets/parada3.png"),
    km: "7km",
    stars: 3,
  },
];

interface Prop {
  color: string;
  onClose: Function;
}

const TabsParadas = (props: Prop) => {
  const navigation = useNavigation();

  function handleSpot() {
    props.onClose();
    navigation.navigate("Spot");
  }

  return (
    <View style={{ flex: 1, maxWidth: "100%" }}>
      <ScrollView horizontal>
        {paradas.map((parada, index) => (
          <TouchableOpacity onPress={handleSpot} key={index}>
            <View style={styles.card}>
              <Image style={styles.image} source={parada.image} />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  name="location-pin"
                  size={20}
                  style={{ color: `${props.color ? props.color : "#5B7488"}` }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    color: `${props.color ? props.color : "#5B7488"}`,
                    textAlign: "center",
                  }}
                >
                  {parada.km}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                {Array(parada.stars)
                  .fill(0)
                  .map((i, index) => (
                    <Icon
                      key={index}
                      name="star"
                      size={20}
                      style={{ color: "#F2C94C" }}
                    />
                  ))}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default TabsParadas;

const styles = StyleSheet.create({
  card: {
    marginRight: 10,
  },
  image: {
    width: 130,
    height: 170,
    borderRadius: 18,
  },
});
