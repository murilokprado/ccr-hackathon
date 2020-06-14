import React from 'react';

import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const comentarios = [
  {
    userName: 'Amarildo Jr.',
    userImage: require('../../assets/caminhoneiro1.png'),
    dateTime: '12/06/2020 - 11:00',
    comment:
      '‘Lugar com área de descanso, chuveiro limpo, restaurante com um bom preço. Vale muito’',
    whatsapp: '5547999999999'
  },
  {
    userName: 'Souza',
    userImage: require('../../assets/caminhoneiro2.png'),
    dateTime: '11/06/2020 - 03:07',
    comment:
      '‘Gostei muito. A segurança no local impressionou. Valor da parada é R$ 10,00 por dia’.',
    whatsapp: '5547999999999'
  }
];

const Comentarios = () => {
  return (
    <View
      style={{
        flex: 1,
        maxWidth: '100%',
        minWidth: '100%'
      }}
    >
      {comentarios.map((comentario, index) => (
        <View style={{ paddingBottom: 32 }} key={index}>
          <View
            style={{ backgroundColor: '#E2E9EE', padding: 8, borderRadius: 8 }}
          >
            <View style={styles.header}>
              <RectButton style={styles.userImage}>
                <Image source={comentario.userImage} style={styles.userImage} />
              </RectButton>
              <Text style={styles.description}>{comentario.dateTime}</Text>
            </View>
            <Text style={styles.content}>{comentario.comment}</Text>
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
