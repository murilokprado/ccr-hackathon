import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo as Icon } from '@expo/vector-icons';

const restaurantes = [
  {
    image: require('../../assets/restaurante1.png'),
    km: '265m',
    stars: 5
  },
  {
    image: require('../../assets/restaurante2.png'),
    km: '5km',
    stars: 4
  },
  {
    image: require('../../assets/restaurante3.png'),
    km: '7km',
    stars: 3
  }
];

interface Prop {
  color: string;
  onClose: Function;
}

const CardsRestaurante = (props: Prop) => {
  const navigation = useNavigation();

  function handleSpot() {
    props.onClose();
    navigation.navigate('Spot');
  }

  return (
    <View style={{ flex: 1, maxWidth: '100%', paddingBottom: 200 }}>
      <ScrollView horizontal>
        {restaurantes.map((restaurante, index) => (
          <TouchableOpacity onPress={handleSpot} key={index}>
            <View style={styles.card}>
              <Image style={styles.image} source={restaurante.image} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Icon
                  name="location-pin"
                  size={20}
                  style={{ color: `${props.color ? props.color : '#5B7488'}` }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    color: `${props.color ? props.color : '#5B7488'}`,
                    textAlign: 'center'
                  }}
                >
                  {restaurante.km}
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                {Array(restaurante.stars)
                  .fill(0)
                  .map((i, index) => (
                    <Icon
                      key={index}
                      name="star"
                      size={20}
                      style={{ color: '#F2C94C' }}
                    />
                  ))}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CardsRestaurante;

const styles = StyleSheet.create({
  card: {
    marginRight: 10
  },
  image: {
    width: 130,
    height: 170,
    borderRadius: 18
  }
});
