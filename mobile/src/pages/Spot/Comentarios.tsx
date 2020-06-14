import React from 'react';

import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import { Entypo as Icon } from '@expo/vector-icons';

const amigos = [
  {
    image: require('../../assets/caminhoneiro1.png'),
    name: 'Amarildo Jr.'
  },
  {
    image: require('../../assets/caminhoneiro2.png'),
    name: 'Cleber'
  },
  {
    image: require('../../assets/caminhoneiro3.png'),
    name: 'José'
  }
];

const Comentarios = () => {
  return (
    <View style={{ flex: 1, maxWidth: '100%', minWidth: '100%' }}>
      <View style={{ backgroundColor: '#E2E9EE', padding: 8, borderRadius: 8 }}>
        <View style={styles.header}>
          <RectButton style={styles.userImage}>
            <Image
              source={require('../../assets/caminhoneiro1.png')}
              style={styles.userImage}
            />
          </RectButton>
          <Text style={styles.description}>
            {'10/10/10'} - {'11:10'}
          </Text>
        </View>
        <Text style={styles.content}>
          ‘Lugar com área de descanso, chuveiro limpo, restaurante com um bom
          preço. Vale muito’
        </Text>
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
  );
};

export default Comentarios;

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
  icon: { fontSize: 32, color: '#5B7488', marginRight: 4 }
});
