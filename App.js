import React, { useState } from 'react';
import {
   StyleSheet, 
   Text, 
   View,
    TextInput, 
    Button, 
    ScrollView, 
    FlatList 
  } from 'react-native';

export default function App() {
  const[enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);


  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
    setCourseGoals(currentGoals => [...courseGoals, 
      {key: Math.random().toString(), value: enteredGoal }
    ]);
  };


  return (
    <View style={Styles.screen}>
      <View style={Styles.inputContainer}>
        <TextInput
         placeholder="Course Goal" 
         style={Styles.input}
         onChangeText={goalInputHandler}
         value={enteredGoal}
         />
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <FlatList data={courseGoals} renderItem={itemData => (
        <View style={Styles.listItem}>
          <Text>{itemData.item.value}</Text>
        </View>
      )}>
      
      </FlatList>
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
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});