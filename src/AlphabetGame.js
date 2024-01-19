import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { alphabetGameStyle as styles } from "./styles/alphabetGameStyle";

// Importa las imágenes de manera explícita y almacénalas en un objeto
const imageMap = {
  A: require('../images/alphabet/A.jpg'),
  B: require('../images/alphabet/B.jpg'),
  C: require('../images/alphabet/C.jpg'),
  D: require('../images/alphabet/D.jpg'),
  E: require('../images/alphabet/E.jpg'),
  F: require('../images/alphabet/F.jpg'),
  G: require('../images/alphabet/G.jpg'),
  H: require('../images/alphabet/H.jpg'),
  I: require('../images/alphabet/I.jpg'),
  J: require('../images/alphabet/J.jpg'),
  K: require('../images/alphabet/K.jpg'),
  L: require('../images/alphabet/L.jpg'),
  M: require('../images/alphabet/M.jpg'),
  N: require('../images/alphabet/N.jpg'),
  O: require('../images/alphabet/O.jpg'),
  P: require('../images/alphabet/P.jpg'),
  Q: require('../images/alphabet/Q.jpg'),
  R: require('../images/alphabet/R.jpg'),
  S: require('../images/alphabet/S.jpg'),
  T: require('../images/alphabet/T.jpg'),
  U: require('../images/alphabet/U.jpg'),
  V: require('../images/alphabet/V.jpg'),
  W: require('../images/alphabet/W.jpg'),
  X: require('../images/alphabet/X.jpg'),
  Y: require('../images/alphabet/Y.jpg'),
  Z: require('../images/alphabet/Z.jpg'),
  // ... agrega todas las letras con sus respectivas imágenes
};

// Crea el array de objetos con letra, imagen y gesto
const alphabetImages = Array.from({ length: 26 }, (_, index) => {
  const letter = String.fromCharCode(65 + index);
  return { letter, image: imageMap[letter], gesture: '🤔' };
});

const AlphabetGame = ({ navigation }) => {
  const [currentImage, setCurrentImage] = useState({});
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);

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
      setConsecutiveCorrect((prevConsecutive) => prevConsecutive + 1);
    } else {
      setConsecutiveCorrect(0);
      handleIncorrectAnswer(correctAnswer);
    }

    if (alphabetImages.length > 1) {
      generateRandomImage();
      setUserInput('');
    } else {
      handleGameComplete();
    }
  };

  const handleIncorrectAnswer = (correctAnswer) => {
    Alert.alert(
      'Incorrect!',
      `You missed. The correct letter is: ${correctAnswer}`,
      [
        {
          text: 'OK',
          onPress: () => {
            generateRandomImage();
            setUserInput('');
          },
        },
      ]
    );
  };

  const handleGameComplete = () => {
    Alert.alert('Game Over', `Your final score is: ${score}`, [
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('Home'); // Vuelve al menú de inicio
        },
      },
    ]);
  };

  const resetGame = () => {
    setScore(0);
    setConsecutiveCorrect(0);
    generateRandomImage();
    setUserInput('');
  };

  return (
    <View style={styles.container}>
      {currentImage.image ? (
        <Image
          source={currentImage.image}
          style={styles.imageContainer}
        />
      ) : (
        <Text>No Image Found</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Type the letter"
        value={userInput}
        onChangeText={(text) => setUserInput(text)}
        maxLength={1}
        autoCapitalize="characters"
      />
      <TouchableOpacity style={styles.button} onPress={handleAnswerSubmission}>
        <Text style={styles.buttonText}>Check</Text>
      </TouchableOpacity>
      <Text style={styles.scoreText}>{`Score: ${score}`}</Text>
      <Text style={styles.scoreText}>{`Your streak: ${consecutiveCorrect}`}</Text>
    </View>
  );
};

export default AlphabetGame;
