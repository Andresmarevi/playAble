import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import AnimalGame from './AnimalGame';
import { useNavigation } from
 
'@react-navigation/native'


const Home = () => {
  const navigation = useNavigation();
  return (
    <View
 
style={{
 
flex:
 
1, backgroundColor: '#4CAF50' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Choose a game</Text>
      <View style={{ flexDirection: 'column', justifyContent: 'center', marginBottom: 20, marginTop: 280 }}>
        <Button title='Animals'
          onPress={() => navigation.navigate('AnimalGame')}
        />
        <Button title='Maths'
          onPress={() => navigation.navigate('MathGame')}
        />
      </View>
    </View>
  );
};

export default Home;