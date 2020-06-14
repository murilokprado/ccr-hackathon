import React, { useEffect, useState } from "react";
import { Feather as Icon, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Modal as RNModal,
  TouchableOpacity,
  Text,
} from "react-native";

import CardsParada from "../Place/CardsParada";
import CardsAbastecimento from "../Place/CardsAbastecimento";

interface Modal {
  icon: string;
  description: string;
  visible: boolean;
  stop: {
    image_url: string;
    km: string;
    stars: number;
  }[];
}

const Modal = (props: Modal) => {
  const [visibleState, setVisibleState] = useState(props.visible);

  function handleCloseModal() {
    setVisibleState(false);
  }

  useEffect(() => {
    setVisibleState(props.visible);
  }, [props.visible]);

  return (
    <RNModal animationType="slide" transparent={true} visible={visibleState}>
      <View style={styles.modalImage}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleCloseModal}>
            <Icon name="arrow-left" style={styles.arrowLeft} />
          </TouchableOpacity>
          <View style={styles.info}>
            <MaterialCommunityIcons
              name={props.icon}
              size={25}
              color="#f5f5f5"
              style={{ marginLeft: 20 }}
            />
            <Text style={styles.infoText}>{props.description}</Text>
          </View>
        </View>
        <View style={styles.spots}>
          {props.icon === "hotel" && <CardsParada color="#FFF" />}
          {props.icon === "gas-station" && <CardsAbastecimento color="#FFF" />}
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalImage: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    alignContent: "flex-end",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, .5)",
    width: "100%",
    height: 280,
    bottom: 0,
  },
  header: {
    width: "100%",
    height: 40,
  },
  arrowLeft: {
    padding: 5,
    fontSize: 30,
    color: "#F5F5F5",
  },
  info: {
    flexDirection: "row",
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    height: 40,
  },
  infoText: {
    alignItems: "center",
    marginLeft: 10,
    fontFamily: "Roboto_400Regular",
    color: "#F5F5F5",
    marginTop: 5,
    fontSize: 15,
  },
  spots: {
    zIndex: 1,
    width: "auto",
    position: "absolute",
    marginTop: 30,
    padding: 20,
  },
});
