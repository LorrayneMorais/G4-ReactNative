import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, FlatList } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars'; // Biblioteca para o calendário com tipagem do DateData
import { styles } from './stylesCompromisso'; // Importando os estilos do arquivo separado

// Definindo o tipo para os dados de compromisso
type CompromissoType = {
    id: number;
    nome: string;
    dia: string; // Formato: YYYY-MM-DD
    horario: string; // Formato: HH:mm
};

const Compromisso = () => {
    const [compromissos, setCompromissos] = useState<CompromissoType[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [novoCompromisso, setNovoCompromisso] = useState({ nome: '', dia: '', horario: '' });
    const [dataSelecionada, setDataSelecionada] = useState<string>(''); // Tipando corretamente como string

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

    // Gerando marcações para o calendário
    const markedDates = compromissos.reduce((acc, compromisso) => {
        acc[compromisso.dia] = { selected: true, marked: true, selectedColor: 'pink' };
        return acc;
    }, {} as Record<string, any>);

    // Função para lidar com o pressionamento de uma data no calendário
    const onDayPress = (day: DateData) => {
        console.log("Dia selecionado:", day.dateString); // Exibe o dia selecionado
        setDataSelecionada(day.dateString); // Atualiza a data selecionada
    };

    // Filtrando os compromissos para a data selecionada
    const compromissosDoDia = compromissos.filter(comp => comp.dia === dataSelecionada);

    return (
        <View style={styles.container}>
            {/* Exibindo a imagem GIF */}
            <View>
                <Image source={require('../../../assets/gifs/feliz.gif')} style={styles.gif} resizeMode="contain" />
            </View>

            {/* Exibindo o calendário */}
            <Calendar
                onDayPress={onDayPress} // Passando a função com tipagem correta
                markedDates={markedDates}
                style={styles.calendar}
                theme={{
                    selectedDayBackgroundColor: 'pink',
                    todayTextColor: 'blue',
                }}
            />

            {/* Exibindo os compromissos do dia selecionado */}
            <View style={styles.compromissosContainer}>
                <Text style={styles.title}>Compromissos para o dia {dataSelecionada}</Text>
                <FlatList
                    data={compromissosDoDia} // Mostrando apenas os compromissos do dia selecionado
                    renderItem={renderItem} // Função que define como renderizar cada item
                    keyExtractor={(item) => item.id.toString()} // Usando o id do compromisso como chave única
                    ListEmptyComponent={<Text style={styles.noCompromissos}>Nenhum compromisso para este dia.</Text>}
                />
            </View>

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
