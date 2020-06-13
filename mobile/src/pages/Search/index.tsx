import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { StyleSheet, View, Text, Image } from 'react-native';

const Search = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={25}
          style={{ color: '#5B7488' }}
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
    padding: 16
  },
  image: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 50,
    height: 50,
    borderRadius: 100,
    marginLeft: 50
  }
});
