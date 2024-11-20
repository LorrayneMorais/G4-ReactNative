import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/routes/navigation/types';
import { Home } from './src/screens/home';
import { Tarefas } from './src/screens/tarefas';
import ListaCompromissos from './src/screens/compromissos/Compromisso';
import { MyTabs } from './src/routes/MyTabs/MyTabs';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyTabs" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Tarefas"
          component={Tarefas}
        />
        <Stack.Screen
          name="ListaCompromisso"
          component={ListaCompromissos}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


