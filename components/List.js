import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function List({ element, deleteHandler }) {
  return (
    <TouchableOpacity onPress={() => deleteHandler(element.key)}>
      <Text style={styles.text}>{element.text}</Text>
    </TouchableOpacity>
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
