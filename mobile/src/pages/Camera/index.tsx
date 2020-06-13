import React, { useState, useEffect, useRef } from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Modal,
  Image,
} from "react-native";
import { Camera as Cam } from "expo-camera";
import Constants from "expo-constants";
const { width: winWidth, height: winHeight } = Dimensions.get("window");
import * as ImagePicker from "expo-image-picker";

const Camera = () => {
  const camRef = React.createRef<Cam>();
  const [hasPermission, setHasPermission] = useState<Boolean>(false);
  const [type, setType] = useState(Cam.Constants.Type.back);
  const [flash, setFlash] = useState(Cam.Constants.FlashMode.on);
  const [capturedPhoto, setCapturedPhoto] = useState("");
  const [modal, setModal] = useState(false);

  function handleSwitchCamera() {
    setType(
      type === Cam.Constants.Type.back
        ? Cam.Constants.Type.front
        : Cam.Constants.Type.back
    );
  }

  async function handleTakePicture() {
    if (camRef) {
      const options = { quality: 0.5, base64: true };
      await camRef.current?.takePictureAsync(options).then((data) => {
        setCapturedPhoto(data.uri);
        setModal(true);
      });
    }
  }

  function handleTurnFlash() {
    setFlash(
      flash === Cam.Constants.FlashMode.on
        ? Cam.Constants.FlashMode.off
        : Cam.Constants.FlashMode.on
    );
  }

  async function openGallery() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
  }

  useEffect(() => {
    (async () => {
      const { status } = await Cam.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
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
      <Cam
        style={styles.cameraContariner}
        type={type}
        flashMode={flash}
        ref={camRef}
      >
        <View style={styles.gallery}>
          <TouchableOpacity style={styles.button} onPress={openGallery}>
            <MaterialCommunityIcons
              name="folder-open"
              size={40}
              style={styles.folder}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
        </View>
      </Cam>

      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleTurnFlash}>
          <MaterialIcons
            name={
              flash === Cam.Constants.FlashMode.on ? "flash-on" : "flash-off"
            }
            size={30}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { marginBottom: -10 }]}
          onPress={handleTakePicture}
        >
          <MaterialCommunityIcons
            name="circle-slice-8"
            size={80}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSwitchCamera}>
          <MaterialCommunityIcons
            name="camera-party-mode"
            size={30}
            style={styles.icon}
          />
        </TouchableOpacity>

        {capturedPhoto != "" && (
          <Modal animationType="slide" transparent={false} visible={modal}>
            <View style={{ backgroundColor: "#202020" }}>
              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => setModal(false)}
              >
                <MaterialCommunityIcons
                  name="close"
                  size={50}
                  color="#FF0000"
                  style={{ backgroundColor: "#202020", alignSelf: "flex-end" }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalImage}>
              <Image style={styles.image} source={{ uri: capturedPhoto }} />
            </View>
          </Modal>
        )}
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
    flexDirection: "column-reverse",
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
  gallery: {
    width: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#4ECB79",
    opacity: 0.8,
  },
  modalImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#202020",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 20,
  },
  folder: {
    color: "#FFFFFF",
  },
});
