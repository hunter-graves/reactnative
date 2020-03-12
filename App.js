import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const[outputText, setOutputText] = useState('Open up App.js to start working on your App')
  return (
    <View style={{padding: 50}}>
      <View>
        <TextInput placeholder="Course Goal" style={{borderBottomColor: 'black', borderBottomWidth: 1 }}/>
        <Button title="ADD"/>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({

});