import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../../screens/home';
import { Tarefas } from '../../screens/tarefas';
import { Image } from 'react-native';
import { styles } from './styles'
import homeIconTabs from '../../../assets/casa.png'
import tarefasIconTabs from '../../../assets/iconTarefasTab.png'
import Cadastro from '../../screens/Cadastro';
import Login  from '../../screens/Login';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Login' 
    screenOptions={{ 
      headerShown: false, 
      tabBarStyle: { 
        backgroundColor: 'black', 
        justifyContent: 'center',
        height: 60
      }
    }}>
      <Tab.Screen
      options={{
        tabBarIcon: () => {
          return <Image 
          source={homeIconTabs}
          resizeMode='contain'
          style={styles.iconsTabs}
          />
        }
      }}  
      name="Home" 
      component={Home} 
      />
      <Tab.Screen
      options={{
        tabBarIcon: () => {
          return <Image 
          source={homeIconTabs}
          resizeMode='contain'
          style={styles.iconsTabs}
          />
        }
      }}  
      name="Login" 
      component={Login} 
      />
       <Tab.Screen
      options={{
        tabBarIcon: () => {
          return <Image 
          source={homeIconTabs}
          resizeMode='contain'
          style={styles.iconsTabs}
          />
        }
      }}  
      name="Cadastro" 
      component={Cadastro} 
      />
      
      <Tab.Screen 
      options={{
        tabBarIcon: () => {
          return <Image
          source={tarefasIconTabs}
          resizeMode='contain'
          style={styles.iconsTabs}
          />
        }
      }}
      name="Tarefas" 
      component={Tarefas} />
    </Tab.Navigator>
  );
}