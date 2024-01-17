import 'react-native-gesture-handler'
import Home from './src/Home';
import Login from './src/Login';
import Header from './src/Header';
import AnimalGame from './src/AnimalGame';
import MathGame from './src/MathGame';
import Register from './src/Register';
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
          options={{
            headerTitle: () => <Header name='Login' />,
            headerStyle: {
              backgroundColor: '#D3D3D3',
              height: 120,
            },
            headerTitleAlign: 'center', // Add this line to center the header title
          }}
        />
        <Stack.Screen
        component={Login}
        name='Login'
        options={{
          headerTitle: () => <Header name='Login' />,
          headerStyle: {
            backgroundColor: '#D3D3D3',
            height: 120,
          },
          headerTitleAlign: 'center', // Add this line to center the header title
        }}
      />
      <Stack.Screen
        component={Register}
        name='Register'
      />
        <Stack.Screen
        component={AnimalGame}
        name='AnimalGame'
        options={{
          headerTitle: () => <Header name='Login' />,
          headerStyle: {
            backgroundColor: '#D3D3D3',
            height: 120,
          },
          headerTitleAlign: 'center', // Add this line to center the header title
        }}
      />
        <Stack.Screen
        component={MathGame}
        name='MathGame'
        options={{
          headerTitle: () => <Header name='Login' />,
          headerStyle: {
            backgroundColor: '#D3D3D3',
            height: 120,
          },
          headerTitleAlign: 'center', // Add this line to center the header title
        }}
      />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
