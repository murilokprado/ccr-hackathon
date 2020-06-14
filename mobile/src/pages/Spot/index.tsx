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

import CardsAmigos from './CardsAmigos';
import Comentarios from './Comentarios';

const Spot = () => {
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

          <View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 32,
                justifyContent: 'space-between'
              }}
            >
              <View>
                <Text style={{ color: '#5B7488' }}>Distância: 5km</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: '#5B7488' }}>Avaliar</Text>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icon
                      key={i}
                      name="star"
                      style={{ color: '#ccc', fontSize: 16 }}
                    />
                  ))}
                </View>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#80A1C1',
                  borderRadius: 12,
                  height: 32
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 8,
                    marginTop: 'auto',
                    marginBottom: 'auto'
                  }}
                >
                  <Icon
                    name="location-pin"
                    style={{ marginRight: 4, color: '#fff', fontSize: 16 }}
                  />
                  <Text style={{ color: '#fff' }}>Dirigir até aqui</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: 32
              }}
            >
              <View>
                <Image
                  source={require('../../assets/caminhao.png')}
                  style={{ height: 50, width: 50, marginRight: 16 }}
                />
              </View>
              <View>
                <Image
                  source={require('../../assets/grafico.png')}
                  style={{ height: 50, width: 200 }}
                />
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                paddingTop: 24,
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: '#5B7488',
                  fontWeight: 'bold',
                  marginRight: 4
                }}
              >
                Amigos
              </Text>
              <Text style={{ fontSize: 16, color: '#5B7488', marginRight: 4 }}>
                Você tem
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#5B7488',
                  fontWeight: 'bold',
                  marginRight: 4
                }}
              >
                4
              </Text>
              <Text style={{ fontSize: 16, color: '#5B7488' }}>
                amigos aqui
              </Text>
            </View>
            <CardsAmigos />
          </View>

          <View>
            <View
              style={{
                paddingTop: 24,
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: '#5B7488',
                  fontWeight: 'bold',
                  marginRight: 4
                }}
              >
                Comentários
              </Text>
            </View>
            <Comentarios />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Spot;

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
    flex: 1,
    paddingBottom: 200
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
