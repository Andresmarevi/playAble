
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import firebase from './config';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Account created successfully');
      navigation.navigate('Login'); // Navigate to the login screen after successful registration
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
      <Button title="Register" onPress={handleSignUp} />
    </View>
  );
};

export default Register;
