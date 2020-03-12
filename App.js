import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const[enteredGoal, setEnteredGoal] = useState('');


  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  return (
    <View style={Styles.screen}>
      <View style={Styles.inputContainer}>
        <TextInput
         placeholder="Course Goal" 
         style={Styles.input}
         onChangeText={goalInputHandler}
         />
        <Button title="ADD"/>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: { 
    width: 200, 
    borderBottomColor: 'black', 
    borderBottomWidth: 1 
  }
});