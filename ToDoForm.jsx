import { SafeAreaView, StyleSheet, Pressable, View, Text, ScrollView, TextInput, Button } from 'react-native';
import { useState } from 'react';
import globalStyles from './styles';


function ToDoForm ({addTask}) {
  const [task, setTask] = useState('');
    return(
        <View style={globalStyles.form}>
                <TextInput
                  style={globalStyles.input}
                  placeholder="add a new task..."
                  value={task}
                  onChangeText={setTask}
                />
                <Button 
                  title="Add"
                  onPress={
                    () => {
                     if (task.trim()){
                      addTask(task);
                      setTask('');
                     }
                    }
                  }

                />
            </View>
    );
};
export default ToDoForm;