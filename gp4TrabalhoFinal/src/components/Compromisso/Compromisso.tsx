// src/screens/Compromisso.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

type Appointment = {
    id: string;
    title: string;
    time: string;
};

const appointments: Appointment[] = [
    { id: '1', title: 'Meeting', time: '10:00' },
    { id: '2', title: 'Medical Consultation', time: '14:30' },
];

const Compromisso = () => {
    const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({
        '2024-11-20': { marked: true },
        '2024-11-22': { marked: true, dotColor: 'blue' },
    });
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [appointmentsList, setAppointmentsList] = useState<Appointment[]>(appointments);

    const navigation = useNavigation();

    const handleDayPress = (day: DateData) => {
        console.log('Selected day:', day.dateString);
        // You can add actions based on selected day
    };

    const handleAddAppointment = () => {
        if (title && time) {
            const newAppointment = { id: `${appointmentsList.length + 1}`, title, time };
            setAppointmentsList([...appointmentsList, newAppointment]);
            setTitle('');
            setTime('');
        }
    };

    const handleDeleteAppointment = (id: string) => {
        setAppointmentsList(appointmentsList.filter(item => item.id !== id));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Appointments</Text>

            <View style={styles.calendarContainer}>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleDayPress}
                    markingType="simple"
                />
            </View>

            <View style={styles.addAppointment}>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Time (HH:MM)"
                    value={time}
                    onChangeText={setTime}
                    keyboardType="numeric"
                />
                <Button title="Add Appointment" onPress={handleAddAppointment} />
            </View>

            <FlatList
                data={appointmentsList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.appointmentItem}>
                        <Text>{item.time} - {item.title}</Text>
                        <Button
                            title="Delete"
                            onPress={() => handleDeleteAppointment(item.id)}
                        />
                    </View>
                )}
            />
        </View>
    );
};

export default Compromisso;
