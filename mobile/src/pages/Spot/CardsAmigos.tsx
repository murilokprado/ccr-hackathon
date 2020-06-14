import React from 'react';

import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

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

const CardsAmigos = () => {
  return (
    <View style={{ flex: 1, maxWidth: '100%' }}>
      <ScrollView horizontal>
        {amigos.map((amigo, index) => (
          <View style={styles.card} key={index}>
            <Image style={styles.image} source={amigo.image} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{ fontSize: 14, color: '#5B7488', textAlign: 'center' }}
              >
                {amigo.name}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CardsAmigos;

const styles = StyleSheet.create({
  card: {
    marginRight: 10
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 65
  }
});
