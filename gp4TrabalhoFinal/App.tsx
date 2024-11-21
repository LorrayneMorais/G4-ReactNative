/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/routes/navigation/types';
import { Home } from './src/screens/home';
import { Tarefas } from './src/screens/tarefas';

import ListaCompromissos from './src/screens/compromissos/Compromisso';
import { MyTabs } from './src/routes/MyTabs/MyTabs';
import Login from './src/screens/Login';


const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
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
        <Stack.Screen
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


