import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/home';
import { Tarefas } from '../screens/tarefas';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Tab.Screen options={{ headerShown: false }} name="Profile" component={Tarefas} />
    </Tab.Navigator>
  );
}