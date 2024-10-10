import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Header from './components/Header';
import List from './components/List';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: 'Buy milk', index: 1 },
    { text: 'Buy fruits', index: 1 },
    { text: 'Wash the car', index: 1 },
    { text: 'Writhe some code', index: 1 },
    { text: 'Meet friends', index: 1 },
  ]);

  return (
    <View>
      <Header />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => <List element={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
