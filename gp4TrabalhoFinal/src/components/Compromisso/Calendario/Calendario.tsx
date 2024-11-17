import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './CalendarioStyle'; // Importa os estilos do arquivo separado

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const renderDays = () => {
        const days = [];
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const totalDays = daysInMonth(month, year);

        // Preencher os dias vazios antes do início do mês
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<View style={styles.day} key={`empty-start-${i}`} />);
        }

        // Adicionar os dias do mês
        for (let day = 1; day <= totalDays; day++) {
            days.push(
                <TouchableOpacity style={styles.day} key={day}>
                    <Text style={styles.dayText}>{day}</Text>
                </TouchableOpacity>
            );
        }

        // Preencher os dias vazios no final para alinhar as semanas
        const remainingSpaces = (7 - (days.length % 7)) % 7;
        for (let i = 0; i < remainingSpaces; i++) {
            days.push(<View style={styles.day} key={`empty-end-${i}`} />);
        }

        return days;
    };

    const handlePreviousMonth = () => {
        const prevMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - 1,
            1
        );
        setCurrentDate(prevMonth);
    };

    const handleNextMonth = () => {
        const nextMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            1
        );
        setCurrentDate(nextMonth);
    };

    return (
        <View style={styles.container}>
            {/* Cabeçalho do calendário */}
            <View style={styles.header}>
                <TouchableOpacity onPress={handlePreviousMonth}>
                    <Text style={styles.navText}>{"<"}</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    {currentDate.toLocaleString("default", {
                        month: "long",
                    })}{" "}
                    {currentDate.getFullYear()}
                </Text>
                <TouchableOpacity onPress={handleNextMonth}>
                    <Text style={styles.navText}>{">"}</Text>
                </TouchableOpacity>
            </View>

            {/* Dias da semana */}
            <View style={styles.weekDays}>
                {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day, index) => (
                    <Text style={styles.weekDayText} key={index}>
                        {day}
                    </Text>
                ))}
            </View>

            {/* Dias do mês */}
            <View style={styles.daysContainer}>{renderDays()}</View>
        </View>
    );
};

export default Calendar;
