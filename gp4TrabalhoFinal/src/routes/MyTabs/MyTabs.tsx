/*
 *   Copyright (c) 2024
 *   All rights reserved.
 */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../screens/home";
import { Tarefas } from "../../screens/tarefas";
import { Image } from "react-native";
import { styles } from "./styles";
import homeIconTabs from "../../../assets/casa.png";
import tarefasIconTabs from "../../../assets/iconTarefasTab.png";
import compromissoIconTabs from "../../../assets/iconCalendarioTabs.png";
import Compromisso from "../../screens/compromissos/Compromisso";

export function MyTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          justifyContent: "center",
          height: 90,
          paddingBottom: 10,
          paddingTop: 10,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={compromissoIconTabs}
                resizeMode="contain"
                style={styles.iconsTabs}
              />
            );
          },
          tabBarLabel: "Compromissos",
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
            marginTop: 5,
          },
        }}
        name="Compromissos"
        component={Compromisso}
      />

      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={homeIconTabs}
                resizeMode="contain"
                style={styles.iconsTabs}
              />
            );
          },
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
            marginTop: 5,
          },
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={tarefasIconTabs}
                resizeMode="contain"
                style={styles.iconsTabs}
              />
            );
          },
          tabBarLabel: "Tarefas",
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
            marginTop: 5,
          },
        }}
        name="Tarefas"
        component={Tarefas}
      />
    </Tab.Navigator>
  );
}
