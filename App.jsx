import React from 'react';
import { SafeAreaView, StyleSheet, Pressable, View, Text, ScrollView, TextInput, Button } from 'react-native';
import { useState } from 'react'; 
import globalStyles from './styles';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}} >To Do List</Text>
      <ScrollView>
        <ToDoList tasks={tasks} deleteTask={deleteTask}/>
        <ToDoForm addTask={addTask}/>
      </ScrollView>
    </SafeAreaView>
  );
    
}
export default App;