import React, { useState, useEffect } from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Camera as Cam } from "expo-camera";
import Constants from "expo-constants";
const { width: winWidth, height: winHeight } = Dimensions.get("window");

const Camera = () => {
  let camera = React.createRef();
  const [hasPermission, setHasPermission] = useState<Boolean>(false);
  const [type, setType] = useState(Cam.Constants.Type.back);
  const [flash, setFlash] = useState(Cam.Constants.FlashMode.on);

  function handleSwitchCamera() {
    setType(
      type === Cam.Constants.Type.back
        ? Cam.Constants.Type.front
        : Cam.Constants.Type.back
    );
  }

  function handleTakePicture() {}

  function handleTurnFlash() {
    setFlash(
      flash === Cam.Constants.FlashMode.on
        ? Cam.Constants.FlashMode.off
        : Cam.Constants.FlashMode.on
    );
    console.log(Cam.Constants.FlashMode);
  }

  useEffect(() => {
    (async () => {
      const { status } = await Cam.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <Cam style={styles.cameraContariner} type={type} flashMode={flash} />
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleTurnFlash}>
          <MaterialIcons
            name={
              flash === Cam.Constants.FlashMode.on ? "flash-on" : "flash-off"
            }
            size={30}
            style={styles.icon}
          ></MaterialIcons>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { marginBottom: -10 }]}
          onPress={handleTakePicture}
        >
          <MaterialCommunityIcons
            name="circle-slice-8"
            size={80}
            style={styles.icon}
          ></MaterialCommunityIcons>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSwitchCamera}>
          <MaterialCommunityIcons
            name="camera-party-mode"
            size={30}
            style={styles.icon}
          ></MaterialCommunityIcons>
        </TouchableOpacity>
      </View>
      <Text style={styles.buttonText}>Pressione para tirar a foto </Text>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  cameraContariner: {
    flex: 1,
    marginTop: 50 + Constants.statusBarHeight,
    height: winHeight,
    width: winWidth,
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    width: "auto",
    justifyContent: "space-between",
    padding: 20,
    maxHeight: 100,
  },
  button: {
    alignSelf: "flex-end",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    color: "#F5F5F5",
    alignSelf: "center",
    marginBottom: 10,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: 10,
  },
});
