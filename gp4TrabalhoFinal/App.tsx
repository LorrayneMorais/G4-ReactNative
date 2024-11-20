import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/navigation/types';
import { Home } from './src/screens/home';
import { Tarefas } from './src/screens/tarefas';
import ListaCompromissos from './src/screens/compromissos/Compromisso';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
        <Stack.Screen options={{ headerShown: false }} name='Tarefas' component={Tarefas} />
        <Stack.Screen options={{ headerShown: false }} name='ListaCompromisso' component={ListaCompromissos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


