import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import firebase from './config';
import { styles } from './styles/loginStyle';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Logged in successfully');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Login error', "The email or the password do not match."+ "\n" + "\n"+ "Please check again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={{ color: '#ecf0f1', textAlign: 'center', fontSize: 16 }}>Login</Text>
      </TouchableOpacity>
      <Text
        onPress={() => navigation.navigate('Register')}
        style={styles.registerText}
      >
        Don't have an account?     Register here
      </Text>
    </View>
  );
};

export default Login;
