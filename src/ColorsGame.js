import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet, ScrollView } from 'react-native';
import PagerView from 'react-native-pager-view';
import { colorsGameStyle as styles } from './styles/colorsGameStyle';

const ColorGame = () => {
    const [currentColor, setCurrentColor] = useState('');
    const [userInput, setUserInput] = useState('');
    const [showColorName, setShowColorName] = useState(false);
    const viewPagerRef = useRef(null);
  
    const colors = [
      { name: 'Rojo', hex: '#FF0000' },
      { name: 'Amarillo', hex: '#FFFF00' },
      { name: 'Verde', hex: '#00FF00' },
      { name: 'Azul', hex: '#0000FF' },
      // Agrega más colores según sea necesario
    ];
  
    const checkAnswer = () => {
      const correctColor = colors[viewPagerRef.current].name.toLowerCase();
      const userAnswer = userInput.trim().toLowerCase();
  
      if (userAnswer === correctColor) {
        Alert.alert('¡Correcto!', `¡${correctColor} es el color correcto!`, [
          { text: 'OK', onPress: showNextColor },
        ]);
        setShowColorName(true);
      } else {
        Alert.alert('Incorrecto', `Intenta de nuevo con el color ${correctColor}.`);
        setShowColorName(false);
      }
    };
  
    const showNextColor = () => {
      setUserInput('');
      setShowColorName(false);
      const nextIndex = viewPagerRef.current + 1;
      if (nextIndex < colors.length) {
        viewPagerRef.current = nextIndex;
      } else {
        Alert.alert('Fin del juego', 'Has completado todos los colores.');
      }
    };
  
    const renderColorPages = () => {
      return colors.map((color, index) => (
        <View style={styles.pageContainer} key={index}>
          {showColorName && (
            <Text style={styles.colorName}>{color.name}</Text>
          )}
          <View style={[styles.colorDisplay, { backgroundColor: color.hex }]} />
          <TextInput
            style={styles.input}
            placeholder="Escribe el color"
            value={userInput}
            onChangeText={(text) => setUserInput(text)}
          />
          <TouchableOpacity style={styles.button} onPress={checkAnswer}>
            <Text style={styles.buttonText}>Verificar</Text>
          </TouchableOpacity>
        </View>
      ));
    };
  
    return (
      <View style={styles.container}>
        <PagerView style={styles.viewPager} ref={viewPagerRef}>
          {renderColorPages()}
        </PagerView>
        <TouchableOpacity style={styles.nextButton} onPress={showNextColor}>
          <Text style={styles.buttonText}>Siguiente Color</Text>
        </TouchableOpacity>
      </View>
    );
  };



export default ColorGame;
