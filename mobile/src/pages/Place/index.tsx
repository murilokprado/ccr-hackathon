import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import { Animated } from 'react-native';

import { Entypo as Icon, MaterialCommunityIcons } from '@expo/vector-icons';

import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import CardsParada from './CardsParada';
import CardsAbastecimento from './CardsAbastecimento';

const Place = () => {
  const navigation = useNavigation();

  function handleNavigationBack() {
    navigation.goBack();
  }

  function handleClickButton() {
    console.log('handleClickButton');
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Image
        source={require('../../assets/joinville.png')}
        style={styles.image}
      />
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={25}
          style={{ color: '#fff', paddingLeft: 16, alignSelf: 'flex-start' }}
          onPress={handleNavigationBack}
        />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            flex: 1,
            minWidth: '100%',
            marginTop: 50
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              paddingVertical: 8,
              minWidth: '100%',
              textAlign: 'center'
            }}
          >
            Joinville
          </Text>
          <Icon name="location-pin" size={20} style={{ color: '#fff' }} />
        </View>
      </View>

      <ScrollView style={styles.information}>
        <View style={styles.collapse} />
        <View style={{ padding: 24 }}>
          <View
            style={{
              backgroundColor: '#E2E9EE',
              padding: 16,
              flexDirection: 'row',
              alignContent: 'stretch',
              justifyContent: 'space-between'
            }}
          >
            <View style={{ justifyContent: 'space-between' }}>
              <Text style={{ color: '#5B7488', fontWeight: 'bold' }}>
                Registrar um momento
              </Text>
              <Text style={{ color: '#5B7488' }}>
                Compartilhe com a comunidade
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#FFBA49'
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  marginHorizontal: 'auto',
                  marginVertical: 'auto',
                  fontSize: 28,
                  fontWeight: 'bold'
                }}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ paddingTop: 24 }}>
            <Text
              style={{ fontSize: 26, color: '#5B7488', fontWeight: 'bold' }}
            >
              Paradas
            </Text>
            <CardsParada />
          </View>

          <View style={{ paddingTop: 24 }}>
            <Text
              style={{ fontSize: 26, color: '#5B7488', fontWeight: 'bold' }}
            >
              Abastecimento
            </Text>
            <CardsAbastecimento />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Place;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 20 + Constants.statusBarHeight,
    position: 'absolute',
    minWidth: '100%'
  },
  image: {
    height: 300,
    width: 'auto'
  },
  information: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: '#FFFFFF',
    minWidth: '100%',
    maxWidth: '100%',
    height: 650,
    position: 'absolute',
    marginTop: 200,
    flex: 1
  },
  collapse: {
    alignSelf: 'center',
    width: 46,
    height: 4,
    top: 10,
    backgroundColor: '#80A1C1',
    borderRadius: 10
  }
});
