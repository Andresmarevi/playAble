import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#F0F8FF' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Choose a game</Text>
      <View style={{ flexDirection: 'column', justifyContent: 'center', marginBottom: 20, marginTop: 280 }}>
        <Button title='Animals'
          onPress={() => alert('Go to Animals!')}
        />
        <Button title='Maths'
          onPress={() => alert('Go to Maths')}
        />
      </View>
    </View>
  );
};

export default Home;
