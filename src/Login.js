// login.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import firebase from './config'; // Adjust the path based on your project structure

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Logged in successfully');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        placeholder="Enter your email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Text>Password:</Text>
      <TextInput
        placeholder="Enter your password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Text
        onPress={() => navigation.navigate('Register')}
        style={{ marginTop: 10, color: 'blue' }}
      >
        Don't have an account? Register here.
      </Text>
    </View>
  );
};

export default LoginScreen;
