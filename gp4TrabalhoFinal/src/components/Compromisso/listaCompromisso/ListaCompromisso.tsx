import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, FlatList, Modal, StyleSheet } from 'react-native';
import { Compromisso, styles } from './listaCompromissoStyles';

const ListaCompromissos = () => {
    const [compromissos, setCompromissos] = useState<Compromisso[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [novoCompromisso, setNovoCompromisso] = useState({ nome: '', dia: '', horario: '' });

    const adicionarCompromisso = () => {
        if (novoCompromisso.nome && novoCompromisso.dia && novoCompromisso.horario) {
            setCompromissos([
                ...compromissos,
                { id: Date.now(), ...novoCompromisso }
            ]);
            setNovoCompromisso({ nome: '', dia: '', horario: '' });
            setIsModalVisible(false);
        }
    };

    const excluirCompromisso = (id: number) => {
        setCompromissos(compromissos.filter(comp => comp.id !== id));
    };

    const renderItem = ({ item }: { item: Compromisso }) => (
        <View style={styles.compromissoItem}>
            <Text>{item.nome} - {item.dia} - {item.horario}</Text>
            <Button title="Excluir" onPress={() => excluirCompromisso(item.id)} />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={compromissos.sort((a, b) => a.horario.localeCompare(b.horario))}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />

            <TouchableOpacity style={styles.botaoAdicionar} onPress={() => setIsModalVisible(true)}>
                <Text style={styles.icon}>+</Text>
            </TouchableOpacity>

            {/* Modal de adição de compromisso */}
            {isModalVisible && (
                <View style={styles.modalContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do compromisso"
                        value={novoCompromisso.nome}
                        onChangeText={(text) => setNovoCompromisso({ ...novoCompromisso, nome: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Dia (ex: 2024-11-17)"
                        value={novoCompromisso.dia}
                        onChangeText={(text) => setNovoCompromisso({ ...novoCompromisso, dia: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Horário (ex: 14:00)"
                        value={novoCompromisso.horario}
                        onChangeText={(text) => setNovoCompromisso({ ...novoCompromisso, horario: text })}
                    />
                    <Button title="Salvar" onPress={adicionarCompromisso} />
                    <Button title="Cancelar" onPress={() => setIsModalVisible(false)} />
                </View>
            )}
        </View>
    );
};

export default ListaCompromissos;
