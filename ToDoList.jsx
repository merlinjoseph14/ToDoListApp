import { SafeAreaView, StyleSheet, Pressable, View, Text, ScrollView, TextInput, Button } from 'react-native';
import { useState } from 'react';
import globalStyles from './styles';

function ToDoList({tasks, deleteTask}) {
    return (
        <ScrollView>
            {tasks.map((task, index) => (
              <View key={index} style={globalStyles.taskContainer}>
                <Text style={globalStyles.taskText}>{task}</Text>
              <Button
                  title="X"
                  onPress={() => deleteTask(index)}
                  color="#FF6347" 
              />
          </View>
            ))}
        </ScrollView>
    );
};
export default ToDoList;