import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';

export default function Form({ addHandler }) {
  const [text, setValue] = useState('');
  const onChange = (text) => {
    setValue(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Create a task..."
      />
      <Button color="green" onPress={() => addHandler(text)} title="Add task" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '60%',
    marginHorizontal: '20%',
  },
});
