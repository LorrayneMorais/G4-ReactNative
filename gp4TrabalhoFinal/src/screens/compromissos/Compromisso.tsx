// Compromisso.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, FlatList } from 'react-native';
import { styles } from './stylesCompromisso'; // Importando os estilos do arquivo separado

// Definindo o tipo para os dados de compromisso
type CompromissoType = {
    id: number;
    nome: string;
    dia: string;
    horario: string;
};

const Compromisso = () => {
    // Estado para armazenar os compromissos
    const [compromissos, setCompromissos] = useState<CompromissoType[]>([]);

    // Estado para controlar a visibilidade do modal
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Estado para armazenar os dados do novo compromisso a ser adicionado
    const [novoCompromisso, setNovoCompromisso] = useState({ nome: '', dia: '', horario: '' });

    // Função para adicionar um novo compromisso
    const adicionarCompromisso = () => {
        if (novoCompromisso.nome && novoCompromisso.dia && novoCompromisso.horario) {
            setCompromissos([...compromissos, { id: Date.now(), ...novoCompromisso }]);
            setNovoCompromisso({ nome: '', dia: '', horario: '' });
            setIsModalVisible(false); // Fecha o modal após adicionar o compromisso
        }
    };

    // Função para excluir um compromisso
    const excluirCompromisso = (id: number) => {
        setCompromissos(compromissos.filter(comp => comp.id !== id));
    };

    // Função para renderizar cada item da lista de compromissos
    const renderItem = ({ item }: { item: CompromissoType }) => (
        <View style={styles.compromissoItem}>
            <Text>{item.nome} - {item.dia} - {item.horario}</Text>
            <Button title="Excluir" onPress={() => excluirCompromisso(item.id)} />
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Exibindo a imagem GIF */}
            <View>
                <Image source={require('../../../assets/gifs/feliz.gif')} style={styles.gif} resizeMode="contain" />
            </View>

            {/* Exibindo a lista de compromissos usando FlatList */}
            <FlatList
                data={compromissos.sort((a, b) => a.horario.localeCompare(b.horario))} // Ordenando por horário
                renderItem={renderItem} // Função que define como renderizar cada item
                keyExtractor={(item) => item.id.toString()} // Usando o id do compromisso como chave única
            />

            {/* Botão flutuante para adicionar um novo compromisso */}
            <TouchableOpacity style={styles.botaoAdicionar} onPress={() => setIsModalVisible(true)}>
                <Text style={styles.icon}>+</Text> {/* Ícone de adicionar */}
            </TouchableOpacity>

            {/* Modal para adicionar compromisso */}
            {isModalVisible && (
                <View style={styles.modalContainer}>
                    {/* Input para o nome do compromisso */}
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do compromisso"
                        value={novoCompromisso.nome}
                        onChangeText={(text) => setNovoCompromisso({ ...novoCompromisso, nome: text })}
                    />
                    {/* Input para o dia do compromisso */}
                    <TextInput
                        style={styles.input}
                        placeholder="Dia (ex: 2024-11-17)"
                        value={novoCompromisso.dia}
                        onChangeText={(text) => setNovoCompromisso({ ...novoCompromisso, dia: text })}
                    />
                    {/* Input para o horário do compromisso */}
                    <TextInput
                        style={styles.input}
                        placeholder="Horário (ex: 14:00)"
                        value={novoCompromisso.horario}
                        onChangeText={(text) => setNovoCompromisso({ ...novoCompromisso, horario: text })}
                    />
                    {/* Botões para salvar ou cancelar */}
                    <Button title="Salvar" onPress={adicionarCompromisso} />
                    <Button title="Cancelar" onPress={() => setIsModalVisible(false)} />
                </View>
            )}
        </View>
    );
};

export default Compromisso;
