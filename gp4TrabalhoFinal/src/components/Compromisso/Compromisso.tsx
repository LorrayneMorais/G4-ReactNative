import React, { useState } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import styles from './style';

type Compromisso = {
    id: string;
    titulo: string;
    horario: string;
    data: string;
};

const Compromisso = () => {
    const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({});
    const [compromissos, setCompromissos] = useState<Compromisso[]>([]);
    const [titulo, setTitulo] = useState('');
    const [horario, setHorario] = useState('');
    const [dataSelecionada, setDataSelecionada] = useState<string>('');

    const handleDayPress = (day: DateData) => {
        setDataSelecionada(day.dateString);
    };

    const adicionarCompromisso = () => {
        if (titulo && horario && dataSelecionada) {
            const novoCompromisso: Compromisso = {
                id: new Date().toISOString(),
                titulo,
                horario,
                data: dataSelecionada,
            };
            setCompromissos([...compromissos, novoCompromisso]);
            setMarkedDates((prevState) => ({
                ...prevState,
                [dataSelecionada]: { marked: true },
            }));
            setTitulo('');
            setHorario('');
        }
    };

    const excluirCompromisso = (id: string) => {
        setCompromissos(compromissos.filter((comp) => comp.id !== id));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Agenda de Compromissos</Text>
            <View style={styles.calendarContainer}>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleDayPress}
                    markingType="simple"
                />
            </View>
            <TextInput
                style={styles.input}
                placeholder="Título do compromisso"
                value={titulo}
                onChangeText={setTitulo}
            />
            <TextInput
                style={styles.input}
                placeholder="Horário (HH:MM)"
                value={horario}
                onChangeText={setHorario}
                keyboardType="numeric"
            />
            <Button title="Adicionar Compromisso" onPress={adicionarCompromisso} />
            <FlatList
                data={compromissos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.appointmentItem}>
                        <Text>{item.horario} - {item.titulo}</Text>
                        <Button title="Excluir" onPress={() => excluirCompromisso(item.id)} />
                    </View>
                )}
            />
        </View>
    );
};

export default Compromisso;
