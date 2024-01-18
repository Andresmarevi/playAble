import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { headerStyles as styles } from './styles/headerStyle';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    </View>
  );
};


export default Header;

