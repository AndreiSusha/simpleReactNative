import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
  return;
  <View style={styles.main}>
    <Text style={styles.text}>To do list</Text>
  </View>;
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 50,
    height: 100,
    backgroundColor: '#00C49F',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontStyle: 'italic',
  },
});
