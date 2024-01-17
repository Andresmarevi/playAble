import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles/homeStyle'; // Import styles from the styles.js file

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Choose a Game</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AnimalGame')}
          >
            <Text style={styles.buttonText}>Guess the Animal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.loginButton]}
            onPress={() => navigation.navigate('MathGame')}
          >
            <Text style={[styles.buttonText, styles.loginButtonText]}>Fun with Maths</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.loginButton]}
            onPress={() => navigation.navigate('users')}
          >
            <Text style={[styles.buttonText, styles.loginButtonText]}>Users</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
