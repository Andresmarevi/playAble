import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { alphabetGameStyle as styles } from "./styles/alphabetGameStyle";

const AlphabetGame = () => {
  const alphabetImages = [
    { letter: 'A', gesture: '🅰️' },
    { letter: 'B', gesture: '🅱️' },
    { letter: 'C', gesture: '©️' },
    // Agrega más letras y gestos según sea necesario
  ];

  const [currentImage, setCurrentImage] = useState({});
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateRandomImage();
  }, [score]);

  const generateRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * alphabetImages.length);
    setCurrentImage(alphabetImages[randomIndex]);
  };

  const handleAnswerSubmission = () => {
    const userAnswer = userInput.toUpperCase().trim();
    const correctAnswer = currentImage.letter;

    if (userAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore((prevScore) => Math.max(0, prevScore - 1));
    }

    if (alphabetImages.length > 1) {
      generateRandomImage();
      setUserInput('');
    } else {
      handleGameOver();
    }
  };

  const handleGameOver = () => {
    Alert.alert('Fin del juego', `Tu puntaje final es: ${score}`, [
      { text: 'OK', onPress: () => resetGame() },
    ]);
  };

  const resetGame = () => {
    setScore(0);
    generateRandomImage();
    setUserInput('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.gestureText}>{currentImage.gesture}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Escribe la letra"
        value={userInput}
        onChangeText={(text) => setUserInput(text)}
        maxLength={1}
        autoCapitalize="characters"
      />
      <TouchableOpacity style={styles.button} onPress={handleAnswerSubmission}>
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>
      <Text style={styles.scoreText}>{`Puntaje: ${score}`}</Text>
    </View>
  );
};


export default AlphabetGame;
