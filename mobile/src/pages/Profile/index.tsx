import React from "react";
import { Feather as Icon, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Linking,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Constants from "expo-constants";
import { RectButton } from "react-native-gesture-handler";

import Statement from "./Statement";

interface Params {
  props: Post;
}

interface Post {
  userName: string;
  userImage: string;
  dateTime: string;
  photo: string;
  whatsapp: string;
}

const statements = [
  {
    userName: "Cleber Santana",
    userImage: require("../../assets/caminhoneiro2.png"),
    dateTime: "22/06/2020 - 11:56",
    description:
      "Esse é um companheiro de muitos anos. Gosto muito de estar com ele e de trocar histórias dessa vida.",
  },
  {
    userName: "José Antunes",
    userImage: require("../../assets/caminhoneiro3.png"),
    dateTime: "19/06/2020 - 17:36",
    description:
      "Amigão para a vida toda. Já passamos por muita coisa juntos, mas não tem quem deixe ele para baixo.",
  },
  {
    userName: "Cleber Santana",
    userImage: require("../../assets/caminhoneiro2.png"),
    dateTime: "22/06/2020 - 11:56",
    description:
      "Esse é um companheiro de muitos anos. Gosto muito de estar com ele e de trocar histórias dessa vida.",
  },
  {
    userName: "José Antunes",
    userImage: require("../../assets/caminhoneiro3.png"),
    dateTime: "19/06/2020 - 17:36",
    description:
      "Amigão para a vida toda. Já passamos por muita coisa juntos, mas não tem quem deixe ele para baixo.",
  },
  {
    userName: "Cleber Santana",
    userImage: require("../../assets/caminhoneiro2.png"),
    dateTime: "22/06/2020 - 11:56",
    description:
      "Esse é um companheiro de muitos anos. Gosto muito de estar com ele e de trocar histórias dessa vida.",
  },
  {
    userName: "José Antunes",
    userImage: require("../../assets/caminhoneiro3.png"),
    dateTime: "19/06/2020 - 17:36",
    description:
      "Amigão para a vida toda. Já passamos por muita coisa juntos, mas não tem quem deixe ele para baixo.",
  },
];

const Profile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as Params;

  function handleNavigationBack() {
    navigation.goBack();
  }

  function handleWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${routeParams.props.whatsapp}&text=Gostaria de ser seu amigo`
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={routeParams.props.userImage}
        style={styles.image}
        imageStyle={styles.imageBackground}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={handleNavigationBack}>
            <Icon name="arrow-left" size={30} color="#5B7488" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="user-plus" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <ScrollView style={styles.scrollView}>
        <View style={styles.information}>
          <View style={styles.collapse} />
          <View style={styles.headerInformation}>
            <RectButton style={styles.button} onPress={handleWhatsapp}>
              <MaterialCommunityIcons
                name="whatsapp"
                size={30}
                style={styles.whatsapp}
              />
              <Text style={styles.buttonText}>Mensagem no Whatsapp</Text>
            </RectButton>
          </View>
          <View>
            <Text style={styles.moments}>
              Momentos de {routeParams.props.userName}
            </Text>
          </View>
          <View>
            <Text style={styles.moments}>Depoimentos</Text>
            {statements.map((statement, index) => (
              <Statement key={index} {...statement} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#FFFFFF",
  },
  imageBackground: {
    width: "auto",
    height: 230,
  },
  image: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scrollView: {},
  information: {
    marginTop: 120,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: "#FFFFFF",
    minWidth: "100%",
    height: 700,
  },
  collapse: {
    alignSelf: "center",
    width: 46,
    height: 4,
    top: 10,
    backgroundColor: "#80A1C1",
    borderRadius: 10,
  },
  headerInformation: {},
  button: {
    marginTop: 30,
    backgroundColor: "#446C48",
    width: 280,
    height: 52,
    flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
    alignSelf: "center",
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "#EB5757",
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    color: "#FFFFFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
  whatsapp: {
    color: "#FFFFFF",
    alignSelf: "center",
    marginLeft: 15,
  },
  moments: {
    padding: 15,
    color: "#80A1C1",
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
  },
});
