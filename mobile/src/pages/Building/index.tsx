import React from 'react';
import { useNavigation, Link } from '@react-navigation/native';
import Constants from 'expo-constants';

import { Entypo as Icon, MaterialCommunityIcons } from '@expo/vector-icons';

import { StyleSheet, View, Text, Image } from 'react-native';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

const Building = () => {
  const navigation = useNavigation();

  function handleNavigationBack() {
    navigation.goBack();
  }

  function handleClickImage() {
    navigation.navigate('Place');
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
        <Image
          source={require('../../assets/roberto.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <Text
          style={{
            fontSize: 26,
            color: '#5B7488',
            marginBottom: 16,
            textAlign: 'center'
          }}
        >
          Ops, ainda estamos trabalhando nisto!
        </Text>
      </View>
    </View>
  );
};

export default Building;

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
  content: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  contentImage: { borderRadius: 18, width: 320, height: 218 },
  description: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'flex-end'
  }
});
