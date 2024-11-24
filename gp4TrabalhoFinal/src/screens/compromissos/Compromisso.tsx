import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native';
import backgroundImag from "../../../assets/background.png";
import images from '../../components/Images';
import { Calendar, DateData } from 'react-native-calendars';
import { styles } from './stylesCompromisso';

type CompromissoType = {
    id: number;
    nome: string;
    dia: string;
    horario: string;
};

const Compromisso = () => {
    const [compromissos, setCompromissos] = useState<CompromissoType[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [novoCompromisso, setNovoCompromisso] = useState({ nome: '', dia: '', horario: '' });
    const [dataSelecionada, setDataSelecionada] = useState<string>('');

    const adicionarCompromisso = () => {
        if (novoCompromisso.nome && novoCompromisso.dia && novoCompromisso.horario) {
            setCompromissos([...compromissos, { id: Date.now(), ...novoCompromisso }]);
            setNovoCompromisso({ nome: '', dia: '', horario: '' });
            setIsModalVisible(false);
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    };

    const excluirCompromisso = (id: number) => {
        setCompromissos(compromissos.filter(comp => comp.id !== id));
    };

    const renderItem = ({ item }: { item: CompromissoType }) => (
        <View style={styles.compromissoItem}>
            <Text>{item.nome} - {item.dia} - {item.horario}</Text>
            <Button title="Excluir" onPress={() => excluirCompromisso(item.id)} />
        </View>
    );

    const onDayPress = (day: DateData) => {
        setDataSelecionada(day.dateString);
    };

    const compromissosDoDia = compromissos.filter(comp => comp.dia === dataSelecionada);

    return (
        <ImageBackground source={backgroundImag} style={styles.backgroundImage} resizeMode="cover">
            <View style={styles.container}>
                <View style={styles.topPag}>
                    <View style={styles.topPagContent}>
                        <Image source={require('../../../assets/virtualPet.png')} style={styles.topPagContentText} />
                    </View>
                </View>
                <View style={styles.containerGifMain}>
                    <ImageBackground source={images.backgroundPet} style={styles.containerGif}>
                        <Image source={require('../../../assets/gifs/gifNormalbdNew.gif')} style={styles.gif} resizeMode="contain" />
                    </ImageBackground>
                </View>
                <Calendar
                    onDayPress={onDayPress}
                    markedDates={compromissos.reduce((acc, compromisso) => {
                        acc[compromisso.dia] = { selected: true, marked: true, selectedColor: 'pink' };
                        return acc;
                    }, {} as Record<string, any>)}
                    style={styles.calendar}
                    theme={{
                        selectedDayBackgroundColor: 'pink',
                        todayTextColor: 'blue',
                    }}
                />

                <View style={styles.compromissosContainer}>
                    <Text style={styles.title}>Compromissos para o dia {dataSelecionada || "nenhum dia selecionado"}</Text>
                    <FlatList
                        data={compromissosDoDia}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        ListEmptyComponent={<Text style={styles.noCompromissos}>Nenhum compromisso para este dia.</Text>}
                    />
                </View>

                <TouchableOpacity style={styles.botaoAdicionar} onPress={() => setIsModalVisible(true)}>
                    <Text style={styles.icon}>+</Text>
                </TouchableOpacity>

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
                            placeholder="Dia (qualquer formato)"
                            value={novoCompromisso.dia}
                            onChangeText={(text) => setNovoCompromisso({ ...novoCompromisso, dia: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Horário (qualquer formato)"
                            value={novoCompromisso.horario}
                            onChangeText={(text) => setNovoCompromisso({ ...novoCompromisso, horario: text })}
                        />
                        <Button title="Salvar" onPress={adicionarCompromisso} />
                        <Button title="Cancelar" onPress={() => setIsModalVisible(false)} />
                    </View>
                )}
            </View>
        </ImageBackground>
    );
};

export default Compromisso;
