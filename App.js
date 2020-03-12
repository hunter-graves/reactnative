import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const[outputText, setOutputText] = useState('Open up App.js to start working on your App')
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput
         placeholder="Course Goal" 
         style={{ width: 200, borderBottomColor: 'black', borderBottomWidth: 1 }}/>
        <Button title="ADD"/>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({

});