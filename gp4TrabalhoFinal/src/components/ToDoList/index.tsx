import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export const ToDoList = () => {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState<TaskType[]>([]);

    type TaskType = {
        id: string;
        descricao: string;
        concluida: boolean;
    }

    const addTask = () => {
        if (inputValue.trim() !== '') {
            const newTask = {
                id: Date.now().toString(),
                descricao: inputValue,
                concluida: false,
            };
            setTasks([...tasks, newTask]);
            setInputValue('');
        }
    };

    const toggleTask = (id: string) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, concluida: !task.concluida } : task
            )
        );
    };

    const removeTask = (id: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <View style={styles.toDoContent}>
            <View style={styles.toDoInputContainer}>
                <TextInput style={styles.toDoInput}
                    placeholder="  adicione tarefas:"
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                    onSubmitEditing={() => {
                        const newTask = {
                            id: (tasks.length + 1).toString(),
                            descricao: inputValue,
                            concluida: false
                        }
                        setTasks([...tasks, newTask]);
                        setInputValue('');
                    }}
                />
                <TouchableOpacity style={styles.toDoAddButton} onPress={addTask}>
                    <Text style={styles.toDoAddButtonText}>➤</Text>
                </TouchableOpacity>
                <View />
            </View>
            <View style={styles.toDoListContainer}>
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.toDoItemContainer} key={item.id}>
                            <View style={styles.toDoItemFirstContent}>
                                <TouchableOpacity
                                    style={styles.toDoItemCheckbox}
                                    onPress={() => toggleTask(item.id)}
                                >
                                    {item.concluida && <Text style={styles.toDoItemCheckmark}>✓</Text>}
                                </TouchableOpacity>
                                <Text
                                    style={[
                                        styles.toDoItemtText,
                                        item.concluida && styles.toDoItemtTextCompleted,
                                    ]}
                                >
                                    {item.descricao}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={styles.toDoItemDeleteButton}
                                onPress={() => removeTask(item.id)}
                            >
                                <Text style={styles.toDoItemDeleteButtonText}>✘</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                >
                </FlatList>
            </View>
        </View>
    )
}