import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [displayText, setDisplayText] = useState('');

  const handleButtonPress = () => {
    const name = 'Basel Qudisat'; // Replace with your name
    const universityID = '140557'; // Replace with your university ID
    setDisplayText(`${name}\n${universityID}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{displayText}</Text>
      <Button title="Show My Info" onPress={handleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});