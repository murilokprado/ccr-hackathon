import React, { useEffect, useState } from "react";
import { Feather as Icon, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Modal as RNModal,
  TouchableOpacity,
  Text,
} from "react-native";

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
  return (
    <RNModal animationType="slide" transparent={true} visible={props.visible}>
      <View style={styles.modalImage}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="arrow-left" style={styles.arrowLeft} />
          </TouchableOpacity>
          <View style={styles.info}>
            <MaterialCommunityIcons
              name={props.icon}
              size={25}
              color="#f5f5f5"
              style={{ marginLeft: 20 }}
            />
            <Text>{props.description}</Text>
          </View>
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
    maxHeight: 150,
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
  },
});
