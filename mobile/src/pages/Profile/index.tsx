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

import Posts from "../Home/Post";
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

const posts = [
  {
    userName: "",
    userImage: "",
    dateTime: "12/06/2020 - 11:00",
    photo: require("../../assets/parada1.png"),
    whatsapp: "5547999999999",
  },
  {
    userName: "",
    userImage: "",
    dateTime: "11/06/2020 - 08:32",
    photo: require("../../assets/parada2.png"),
    whatsapp: "5547999999999",
  },
  {
    userName: "",
    userImage: "",
    dateTime: "09/06/2020 - 10:10",
    photo: require("../../assets/parada3.png"),
    whatsapp: "5547999999999",
  },
  {
    userName: "",
    userImage: "",
    dateTime: "06/06/2020 - 23:10",
    photo: require("../../assets/parada4.png"),
    whatsapp: "5547999999999",
  },
];

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

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            flex: 1,
            minWidth: "100%",
            marginTop: 50,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              paddingVertical: 8,
              minWidth: "100%",
              textAlign: "center",
            }}
          >
            {routeParams.props.userName}
          </Text>
        </View>
      </ImageBackground>

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
        <ScrollView style={styles.scrollView}>
          <Text style={styles.moments}>
            Momentos de {routeParams.props.userName}
          </Text>
          <View style={styles.moment}>
            {posts.map(
              (post, index) => (
                (post.userName = routeParams.props.userName),
                (post.userImage = routeParams.props.userImage),
                (<Posts key={index} {...post} />)
              )
            )}
          </View>
          <View>
            <Text style={styles.statements}>Depoimentos</Text>
            {statements.map((statement, index) => (
              <Statement key={index} {...statement} />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => {}}>
          <Text style={styles.footerText}>Dar depoimento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#FFFFFF",
    position: "absolute",
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
  scrollView: {
    marginTop: 10,
    marginBottom: 40,
  },
  information: {
    marginTop: 32,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: "#FFFFFF",
    minWidth: "100%",
    height: 650,
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
  moment: {
    padding: 20,
    paddingBottom: 0,
    paddingTop: 0,
  },
  moments: {
    padding: 15,
    color: "#80A1C1",
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
  },
  statements: {
    padding: 15,
    color: "#80A1C1",
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
  },
  footer: {
    width: "100%",
    height: 50,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#80A1C1",
  },
  footerButton: {
    height: 52,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
    color: "#F5F5F5",
  },
});
