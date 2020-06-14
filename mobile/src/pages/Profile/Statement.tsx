import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

interface Statement {
  userName: string;
  userImage: string;
  dateTime: string;
  description: string;
}

const Statement = (props: Statement) => {
  return (
    <View style={styles.momentsContainer}>
      <View style={styles.moments}>
        <View style={styles.momentHeader}>
          <Image source={props.userImage} style={styles.imageMoment} />
          <Text style={styles.momentDescription}>
            {props.userName} - {props.dateTime}
          </Text>
        </View>
        <Text style={styles.momentDescription}>{props.description}</Text>
        <View style={styles.buttons}>
          <Text style={styles.momentDescription}>Curtir</Text>
          <Icon name="thumb-up" style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

export default Statement;

const styles = StyleSheet.create({
  momentsContainer: {
    marginBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    paddingHorizontal: 32,
    backgroundColor: "#F5F5F5",
    height: 140,
    width: 350,
    alignSelf: "center",
    borderRadius: 5,
  },
  moments: {
    paddingTop: 5,
  },
  momentHeader: {
    marginTop: 5,
    flexDirection: "row",
  },
  imageMoment: {
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: 30,
    height: 30,
    borderRadius: 100,
    marginLeft: 10,
  },
  momentDescription: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    alignSelf: "center",
    marginLeft: 10,
    color: "#5B7488",
  },
  buttons: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
    color: "#2D9CDB",
    marginRight: 4,
    marginLeft: 10,
  },
});
