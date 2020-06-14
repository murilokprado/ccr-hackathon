import React, { useState, useEffect } from 'react';
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
import * as Location from 'expo-location';
import { RectButton } from 'react-native-gesture-handler';

import Post from './Post';

interface Address {
  city: string;
  street: string;
  region: string;
  country: string;
  postalCode: string;
  name: string;
}

const posts = [
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
  },
  {
    userName: 'Pedro',
    userImage: require('../../assets/caminhoneiro3.png'),
    dateTime: '09/06/2020 - 10:10',
    photo: require('../../assets/parada3.png'),
    whatsapp: '5547999999999'
  },
  {
    userName: 'Pedro',
    userImage: require('../../assets/caminhoneiro4.png'),
    dateTime: '09/06/2020 - 10:10',
    photo: require('../../assets/parada4.png'),
    whatsapp: '5547999999999'
  }
];

const Home = () => {
  const navigation = useNavigation();

  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  function handleNavigationBack() {
    navigation.goBack();
  }

  function handleNavigationToCamera() {
    navigation.navigate('Camera');
  }

  function handleSearch() {
    navigation.navigate('Search');
  }

  function handleNavigationToMap() {
    navigation.navigate('Map');
  }

  function handleNavigationToParadas() {
    navigation.navigate('Spot');
  }

  function handleNatigateToBuilding() {
    navigation.navigate('Building');
  }

  useEffect(() => {
    async function loadLocation() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Ops....',
          'Precisamos de sua permissão para obter a sua localização'
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      const address: Address[] = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });

      setCity(address[0].city ? address[0].city : 'Joinville');
      setState(address[0].region ? address[0].region : 'Santa Catarina');
    }

    loadLocation();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Feather name="info" size={30} style={styles.infoIcon} />
            <Feather name="map-pin" size={15} style={styles.mapPinIcon} />
            <Text style={styles.city}>{city}</Text>
            <Text style={styles.state}>, {state}</Text>
            <Image
              source={require('../../assets/roberto.png')}
              style={styles.image}
            />
          </View>

          <TextInput
            placeholder="Pesquise aqui locais, pessoas..."
            style={{
              backgroundColor: '#E2E9EE',
              marginTop: 24,
              padding: 8,
              borderRadius: 20
            }}
            onFocus={handleSearch}
          />

          <View style={styles.containerButtons}>
            <RectButton
              style={[styles.button, { backgroundColor: '#2D9CDB' }]}
              onPress={handleNavigationToMap}
            >
              <Feather
                name="map"
                size={25}
                color="#f5f5f5"
                style={{ marginLeft: 20 }}
              />
              <Text style={styles.buttonText}>Mapa</Text>
            </RectButton>

            <RectButton
              style={[
                styles.button,
                { backgroundColor: '#FFBA49', marginLeft: 10 }
              ]}
              onPress={handleNavigationToParadas}
            >
              <MaterialCommunityIcons
                name="hotel"
                size={25}
                color="#f5f5f5"
                style={{ marginLeft: 20 }}
              />
              <Text style={styles.buttonText}>Paradas</Text>
            </RectButton>

            <RectButton
              style={[styles.button, { backgroundColor: '#5B7488' }]}
              onPress={handleNatigateToBuilding}
            >
              <MaterialCommunityIcons
                name="gas-station"
                size={25}
                color="#f5f5f5"
                style={{ marginLeft: 20 }}
              />
              <Text style={styles.buttonText}>Abastecer</Text>
            </RectButton>

            <RectButton
              style={[
                styles.button,
                { backgroundColor: '#FCAE76', marginLeft: 10 }
              ]}
              onPress={handleNatigateToBuilding}
            >
              <MaterialIcons
                name="shopping-cart"
                size={25}
                color="#f5f5f5"
                style={{ marginLeft: 20 }}
              />
              <Text style={styles.buttonText}>Negociação</Text>
            </RectButton>
          </View>

          <View style={{ marginBottom: 32 }}>
            <Text style={styles.textBold}>Momentos</Text>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 16,
                justifyContent: 'space-between'
              }}
            >
              <Text
                style={{ fontSize: 14, color: '#5B7488', fontWeight: 'bold' }}
              >
                Amigos
              </Text>
              <Text style={{ fontSize: 14, color: '#5B7488' }}>Comunidade</Text>
              <Text style={{ fontSize: 14, color: '#5B7488' }}>
                Grupos de WhatsApp
              </Text>
            </View>
            {posts.map((post, index) => (
              <Post key={index} {...post} />
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={handleNavigationToCamera}
        >
          <MaterialCommunityIcons
            name="camera"
            size={30}
            color="#f5f5f5"
            style={{ marginLeft: 20 }}
          />

          <Text style={styles.footerText}>Registrar Momento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: '#FFFFFF',
    paddingLeft: 8,
    paddingRight: 8,
    alignSelf: 'center'
  },
  header: {
    flexDirection: 'row',
    paddingTop: 20 + Constants.statusBarHeight
  },
  infoIcon: {
    alignSelf: 'center',
    color: '#EB5757',
    shadowOffset: { width: 0, height: 5 },
    shadowColor: '#EB5757',
    shadowOpacity: 0.25,
    shadowRadius: 2
  },
  mapPinIcon: {
    alignSelf: 'center',
    color: '#80A1C1',
    marginLeft: 20,
    marginTop: 1
  },
  information: {
    flexDirection: 'row'
  },
  city: {
    color: '#80A1C1',
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Roboto_700Bold'
  },
  state: {
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Roboto_400Regular'
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
  text: {
    fontSize: 32,
    fontFamily: 'Roboto_400Regular'
  },
  textBold: {
    fontSize: 32,
    fontFamily: 'Roboto_700Bold',
    color: '#5B7488'
  },
  description: {
    fontSize: 16,
    fontFamily: 'Roboto_400Regular'
  },
  welcome: {
    marginTop: 20,
    height: 60
  },
  containerButtons: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 30,
    width: 330,
    height: 180
  },
  button: {
    flexDirection: 'row',
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    marginBottom: 10,
    width: 160,
    height: 70
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    color: '#FFFFFF'
  },
  footer: {
    width: '100%',
    height: 50,
    backgroundColor: '#BB6BD9',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  footerButton: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  footerText: {
    fontSize: 20,
    fontFamily: 'Roboto_400Regular',
    color: '#F5F5F5',
    marginLeft: 10
  }
});
