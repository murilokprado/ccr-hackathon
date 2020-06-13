import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

import { Entypo as Icon, MaterialCommunityIcons } from '@expo/vector-icons';

import { StyleSheet, View, Text, Image } from 'react-native';

const Search = () => {
  const navigation = useNavigation();

  function handleNavigationBack() {
    navigation.goBack();
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={25}
          style={{ color: '#5B7488' }}
          onPress={handleNavigationBack}
        />
        <Text
          style={{
            color: '#5B7488',
            fontSize: 16,
            fontWeight: 'bold'
          }}
        >
          Você está pesquisando
        </Text>
        <Image
          source={require('../../assets/roberto.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <Text style={{ fontSize: 26, color: '#5B7488', marginBottom: 16 }}>
          Resultados
        </Text>
        <Image
          source={require('../../assets/joinville.png')}
          style={styles.contentImage}
        />
        <View style={styles.description}>
          <Text style={{ fontSize: 16, color: '#5B7488', fontWeight: 'bold' }}>
            Joinville
          </Text>
          <Text style={{ fontSize: 16, color: '#5B7488' }}>, SC</Text>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 8,
              justifyContent: 'flex-end',
              alignItems: 'flex-end'
            }}
          >
            <Icon name="location-pin" size={20} style={{ color: '#5B7488' }} />
            <Text style={{ fontSize: 14, color: '#5B7488' }}>
              Você está aqui
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 20 + Constants.statusBarHeight,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16
  },
  image: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 50,
    height: 50,
    borderRadius: 100,
    marginLeft: 50
  },
  content: { marginTop: 32, flex: 1, alignSelf: 'center' },
  contentImage: { borderRadius: 18, width: 320, height: 218 },
  description: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'flex-end'
  }
});
