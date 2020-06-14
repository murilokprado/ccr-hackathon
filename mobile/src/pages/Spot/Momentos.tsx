import React from 'react';

import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const momentos = [
  {
    userName: 'Amarildo Jr.',
    userImage: require('../../assets/caminhoneiro1.png'),
    dateTime: '12/06/2020 - 11:00',
    photo: require('../../assets/parada1.png'),
    whatsapp: '5547999999999'
  },
  {
    userName: 'Souza',
    userImage: require('../../assets/caminhoneiro2.png'),
    dateTime: '11/06/2020 - 03:07',
    photo: require('../../assets/parada2.png'),

    whatsapp: '5547999999999'
  }
];

const Momentos = () => {
  return (
    <View
      style={{
        flex: 1,
        maxWidth: '100%',
        minWidth: '100%',
        paddingBottom: 200
      }}
    >
      {momentos.map((momento, index) => (
        <View style={{ paddingBottom: 32 }} key={index}>
          <View
            style={{ backgroundColor: '#E2E9EE', padding: 8, borderRadius: 8 }}
          >
            <View style={styles.header}>
              <RectButton style={styles.userImage}>
                <Image source={momento.userImage} style={styles.userImage} />
              </RectButton>
              <Text style={styles.description}>{momento.dateTime}</Text>
            </View>
            <Image source={momento.photo} style={styles.imageStop} />
          </View>
          <View style={styles.actions}>
            <View style={styles.action}>
              <Icon name="thumb-up" style={styles.icon} />
              <Text style={{ color: '#5B7488' }}>Curtir</Text>
            </View>
            <View style={styles.action}>
              <Icon name="comment" style={styles.icon} />
              <Text style={{ color: '#5B7488' }}>Comentar</Text>
            </View>
            <RectButton style={styles.action}>
              <View style={styles.action}>
                <Icon name="whatsapp" style={styles.icon} />

                <Text style={{ color: '#5B7488' }}>Compartilhar</Text>
              </View>
            </RectButton>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Momentos;

const styles = StyleSheet.create({
  card: {
    marginRight: 10
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 65
  },
  header: {
    marginTop: 5,
    flexDirection: 'row',
    height: 50,
    width: 'auto'
  },
  userImage: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 30,
    height: 30,
    borderRadius: 100,
    marginLeft: 10
  },
  description: {
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    alignSelf: 'center',
    marginLeft: 10,
    color: '#5B7488'
  },
  content: {
    color: '#5B7488',
    fontSize: 16,
    paddingVertical: 8
  },
  actions: {
    flexDirection: 'row',
    paddingTop: 8,
    justifyContent: 'space-between'
  },
  action: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: { fontSize: 32, color: '#5B7488', marginRight: 4 },
  imageStop: {
    width: 'auto',
    height: 200
  }
});
