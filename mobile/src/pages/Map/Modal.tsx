import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Modal as RNModal,
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
    <>
      <RNModal
        animationType="slide"
        transparent={false}
        visible={props.visible}
      >
        <View style={{ backgroundColor: "#202020" }}>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => {
              !props.visible;
            }}
          >
            <MaterialCommunityIcons
              name="close"
              size={50}
              color="#FF0000"
              style={{ backgroundColor: "#202020", alignSelf: "flex-end" }}
            />
          </TouchableOpacity>
        </View>
      </RNModal>
    </>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalImage: {
    backgroundColor: "#202020",
    padding: 20,
    bottom: 0,
    width: "auto",
    height: 50,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 20,
  },
});
