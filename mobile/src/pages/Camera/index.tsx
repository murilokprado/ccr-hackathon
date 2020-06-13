import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera as Cam } from "expo-camera";

const Camera = () => {
  const [hasPermission, setHasPermission] = useState<Boolean>(false);
  const [type, setType] = useState(Cam.Constants.Type.back);

  function handleSwitchCamera() {
    setType(
      type === Cam.Constants.Type.back
        ? Cam.Constants.Type.front
        : Cam.Constants.Type.back
    );
  }

  function handleTakePicture() {
    alert("Vou tirar em!!");
  }

  function handleTurnFlash() {
    alert("vou ligar o flash");
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
    <View style={{ flex: 1 }}>
      <Cam style={{ flex: 1 }} type={type}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={handleTurnFlash}>
            <MaterialIcons
              name="flash-off"
              size={50}
              color="#F5F5F5"
            ></MaterialIcons>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleTakePicture}>
            <MaterialIcons
              name="camera"
              size={50}
              color="#F5F5F5"
            ></MaterialIcons>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleSwitchCamera}>
            <MaterialIcons
              name="switch-camera"
              size={50}
              color="#F5F5F5"
            ></MaterialIcons>
          </TouchableOpacity>
        </View>
      </Cam>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    width: "auto",
    justifyContent: "space-between",
    padding: 20,
  },
  button: {
    alignSelf: "flex-end",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    marginBottom: 10,
    color: "white",
  },
});
