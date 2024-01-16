import 'react-native-gesture-handler'
import Home from './src/Home';
import Login from './src/Login';
import Header from './src/Header';
import AnimalGame from './src/AnimalGame';
import MathGame from './src/MathGame';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        component={Home}
        name='Home'
        options={{headerTitle: () => <Header name='Notes' />,
        headerStyle:{
          backgroundColor: '#4c00b0',
          height:120,
        }}}
        />
        <Stack.Screen
        component={Login}
        name='Login'
        options={{headerTitle: () => <Header name='Login' />,
        headerStyle:{
          backgroundColor: '#4c00b0',
          height:120,
        }}}
        />
        <Stack.Screen
        component={AnimalGame}
        name='AnimalGame'
        options={{headerTitle: () => <Header name='Animal Game' />,
        headerStyle:{
          backgroundColor: '#4c00b0',
          height:120,
        }}}
        />
        <Stack.Screen
        component={MathGame}
        name='MathGame'
        options={{headerTitle: () => <Header name='Math Game' />,
        headerStyle:{
          backgroundColor: '#4c00b0',
          height:120,
        }}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
