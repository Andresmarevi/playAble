import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ColorGame = () => {
  const colors = [
    { name: 'Rojo', hex: '#FF0000' },
    { name: 'Amarillo', hex: '#FFFF00' },
    { name: 'Verde', hex: '#00FF00' },
    { name: 'Azul', hex: '#0000FF' },
    // Agrega más colores según sea necesario
  ];

  const [currentColor, setCurrentColor] = useState({});
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    generateRandomColor();
    startTimer();
  }, [score]);

  const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setCurrentColor(colors[randomIndex]);
  };

  const startTimer = () => {
    setTimeLeft(10);
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          handleTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const handleColorSelection = (selectedColor) => {
    if (selectedColor === currentColor.name) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore((prevScore) => Math.max(0, prevScore - 1));
    }
  };

  const handleTimeUp = () => {
    Alert.alert('Tiempo agotado', `Tu puntaje final es: ${score}`, [
      { text: 'OK', onPress: () => setScore(0) },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{`Tiempo: ${timeLeft}s`}</Text>
      <View style={[styles.colorDisplay, { backgroundColor: currentColor.hex }]} />
      <Text style={styles.instructionText}>{`Selecciona el color: ${currentColor.name}`}</Text>
      <View style={styles.buttonContainer}>
        {colors.map((color) => (
          <TouchableOpacity
            key={color.name}
            style={[styles.colorButton, { backgroundColor: color.hex }]}
            onPress={() => handleColorSelection(color.name)}
            disabled={timeLeft === 0}
          >
            <Text style={styles.buttonText}>{color.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.scoreText}>{`Puntaje: ${score}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 18,
    marginBottom: 10,
  },
  colorDisplay: {
    width: 200,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  colorButton: {
    width: 80,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default ColorGame;
