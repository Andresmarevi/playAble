import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { evaluate } from 'mathjs';
import { mathGameStyles as styles } from './styles/mathGameStyle';

const MathGame = () => {
  const navigation = useNavigation();

  const [isGameEnded, setIsGameEnded] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const numberImages = [
    { image: require('../images/numbers/1.png'), name: '1' },
    { image: require('../images/numbers/2.png'), name: '2' },
    { image: require('../images/numbers/3.png'), name: '3' },
    { image: require('../images/numbers/4.png'), name: '4' },
    { image: require('../images/numbers/5.png'), name: '5' },
    { image: require('../images/numbers/6.png'), name: '6' },
    { image: require('../images/numbers/7.png'), name: '7' },
    { image: require('../images/numbers/8.png'), name: '8' },
    { image: require('../images/numbers/9.png'), name: '9' },
    { image: require('../images/numbers/10.png'), name: '10' },
    { image: require('../images/numbers/11.png'), name: '11' },
    { image: require('../images/numbers/12.png'), name: '12' },
    { image: require('../images/numbers/13.png'), name: '13' },
    { image: require('../images/numbers/14.png'), name: '14' },
    { image: require('../images/numbers/15.png'), name: '15' },
    { image: require('../images/numbers/16.png'), name: '16' },
    { image: require('../images/numbers/17.png'), name: '17' },
    { image: require('../images/numbers/18.png'), name: '18' },
    { image: require('../images/numbers/19.png'), name: '19' },
    { image: require('../images/numbers/20.png'), name: '20' },
];

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
  
      // Display an alert with an image when correctAnswersCount reaches 20
      Alert.alert(
        'Congratulations!',
        'You completed 20 correct answers!',
        [
          {
            text: 'OK',
            onPress: () => {
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
