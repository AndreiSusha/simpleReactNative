import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

export default function List({ element }) {
  return (
    <TouchableHighlight style={styles.main}>
      <Text style={styles.text}>{element.text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: 'lightblue',
    borderWidth: 1,
    marginTop: 10,
    width: '60%',
    marginLeft: '20%',
  },
});
