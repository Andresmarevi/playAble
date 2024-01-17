import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { evaluate } from 'mathjs';
import Sound from 'react-native-sound';
import ImagePicker from 'react-native-image-picker';
import { mathGameStyles as styles } from './styles/mathGameStyle';

const MathGame = () => {
  const navigation = useNavigation();

  const [isGameEnded, setIsGameEnded] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const congratulationsSound = new Sound('congratulations.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.error('Failed to load sound', error);
    }
  });

  useEffect(() => {
    if (correctAnswersCount == 20) {
      setIsGameEnded(true);
    } else if (!isCorrect) {
      generateQuestion();
    }
  }, [correctAnswersCount, isCorrect]);
 

  
  
  const generateQuestion = () => {
    let tempNum1, questionText, isInvalidResult;
  
    do {
      tempNum1 = Math.floor(Math.random() * 11);
      isInvalidResult = false;
      questionText = `${tempNum1}`;
  
      if (correctAnswersCount < 5) {
        const operation = Math.floor(Math.random() * 2); // 0 for addition, 1 for subtraction
        const tempNum2 = Math.floor(Math.random() * 11);
  
        if (operation === 0) {
          questionText += ` + ${tempNum2}`;
          tempNum1 += tempNum2;
        } else {
          questionText += ` - ${tempNum2}`;
          tempNum1 -= tempNum2;
          if (tempNum1 < 0 || tempNum1 > 20) {
            isInvalidResult = true;
          }
        }
      } else {
        const operationsCount = correctAnswersCount < 10 ? 3 : correctAnswersCount < 16 ? 4 : 5;
  
        for (let i = 0; i < operationsCount; i++) {
          const tempNum2 = Math.floor(Math.random() * 11);
          const operation = Math.floor(Math.random() * 2); // 0 for addition, 1 for subtraction
          questionText += operation === 0 ? ` + ${tempNum2}` : ` - ${tempNum2}`;
          tempNum1 += operation === 0 ? tempNum2 : -tempNum2;
  
          if (tempNum1 < 0 || tempNum1 > 20) {
            isInvalidResult = true;
            break; // Stop the loop if an invalid result is encountered
          }
        }
      }
    } while (isInvalidResult);
  
    questionText += ' = ?';
  
    setQuestion(questionText);
    setUserAnswer('');
  };

  const checkAnswer = () => {
    try {
      const userNum = parseFloat(userAnswer);

      if (!isNaN(userNum)) {
        const parts = question.split('=').map(part => part.trim());
        const leftSide = parts[0];
        const correctAnswer = evaluate(leftSide);
        const isCorrect = Math.abs(userNum - correctAnswer) < 0.0001;

        Alert.alert(
          isCorrect ? 'Correct' : 'Incorrect',
          isCorrect ? 'Well Done!' : 'Sorry, Try again.',
        );

        setIsCorrect(isCorrect);

        if (isCorrect) {
          setCorrectAnswersCount((count) => (count < 20 ? count + 1 : 20));
        } else {
          setCorrectAnswersCount(0);
        }
      } else {
        Alert.alert('Incorrect', 'Sorry, Try again.');
        setIsCorrect(false);
        setCorrectAnswersCount(0);
      }

      generateQuestion();
    } catch (error) {
      console.error('Error evaluating the expression:', error);
    }
    
  };

  useEffect(() => {
    if (correctAnswersCount === 20) {
      // Play the congratulations sound
      congratulationsSound.play();
  
      // Display an alert with an image when correctAnswersCount reaches 20
      Alert.alert(
        'Congratulations!',
        'You completed 20 correct answers!',
        [
          {
            text: 'OK',
            onPress: () => {
              // Stop the sound when the user presses OK
              congratulationsSound.stop();
  
              // Navigate to the Home screen
              navigation.navigate('Home');
            },
          },
        ],
        { cancelable: false }
      );
    }
  }, [correctAnswersCount]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Your answer"
        value={userAnswer}
        onChangeText={(text) => setUserAnswer(text)}
      />

      <View style={styles.buttonContainer}>
        <Button title="Check Answer" onPress={checkAnswer} color="blue" />
        <Button title="Back to Home" onPress={() => navigation.goBack()} color="blue" />
      </View>

      {isCorrect !== null && (
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>{correctAnswersCount}</Text>
        </View>
      )}
    </View>
  );
};

export default MathGame;

