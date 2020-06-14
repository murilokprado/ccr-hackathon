import React from 'react';

import { StyleSheet, View, Text, ScrollView } from 'react-native';

const TabsParadas = () => {
  return (
    <View style={{ flex: 1, maxWidth: '100%' }}>
      <ScrollView horizontal>
        <View style={styles.card}>
          <Text>CARD</Text>
        </View>
        <View style={styles.card}>
          <Text>CARD</Text>
        </View>
        <View style={styles.card}>
          <Text>CARD</Text>
        </View>
        <View style={styles.card}>
          <Text>CARD</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default TabsParadas;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#777',
    width: 130,
    height: 170,
    marginHorizontal: 10
  }
});
