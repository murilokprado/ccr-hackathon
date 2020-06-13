import React from "react";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";

const Home = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.truckContainer}>
            <Icon name="truck-fast" style={styles.truckIcon} size={38} />
          </View>
          <Text style={styles.title}>Caminhão amigo</Text>
          <Text style={styles.description}>
            Valorizando o caminhoneiro e sua trajetória
          </Text>
        </View>

        <View style={styles.footer}>
          <RectButton style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Participar</Text>
          </RectButton>
          <Text style={styles.community}>Conhecer a comunidade</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "#5C8960",
  },

  main: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "#f5f5f5",
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    marginTop: 20,
    alignSelf: "center",
  },

  description: {
    color: "#f5f5f5",
    fontSize: 12,
    fontFamily: "Roboto_400Regular",
    maxWidth: 260,
    lineHeight: 24,
    alignSelf: "center",
  },

  truckContainer: {
    backgroundColor: "#fff",
    width: 80,
    height: 80,
    borderRadius: 100,
    alignSelf: "center",
  },

  truckIcon: {
    textAlign: "center",
    marginTop: 20,
    color: "rgba(0, 0, 0, 0.8)",
  },

  footer: {
    marginTop: 10,
    marginBottom: 80,
  },

  button: {
    backgroundColor: "#EF5B5B",
    height: 60,
    flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 24,
  },

  community: {
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Roboto_400Regular",
  },
});
