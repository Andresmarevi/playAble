import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { evaluate } from 'mathjs';
import { mathGameStyles as styles } from './styles/mathGameStyle';

const MathGame = () => {
  const navigation = useNavigation();

  const [userAnswer, setUserAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  useEffect(() => {
    generateQuestion();
  }, [correctAnswersCount]); // Trigger effect when correctAnswersCount changes

  const generateQuestion = () => {
    const newNum1 = Math.floor(Math.random() * 11);
    const newNum2 = Math.floor(Math.random() * 11);
    let questionText = '';

    let tempNum1 = newNum1;

    if (correctAnswersCount < 5) {
      const operation = Math.floor(Math.random() * 2); // 0 for addition, 1 for subtraction
      const tempNum2 = Math.floor(Math.random() * 11);

      if (operation === 0) {
        questionText = `${tempNum1} + ${tempNum2} = ?`;
        tempNum1 += tempNum2;
      } else {
        questionText = `${tempNum1} - ${tempNum2} = ?`;
        tempNum1 -= tempNum2;
      }
    } else {
      const operationsCount = correctAnswersCount < 10 ? 3 : correctAnswersCount < 16 ? 4 : 5;
      questionText = `${tempNum1}`;
    
      for (let i = 0; i < operationsCount; i++) {
        const tempNum2 = Math.floor(Math.random() * 11);
        const operation = Math.floor(Math.random() * 4);
        switch (operation) {
          case 0:
            questionText += `+ ${tempNum2} `;
            tempNum1 += tempNum2;
            break;
          case 1:
            questionText += `- ${tempNum2} `;
            tempNum1 -= tempNum2;
            break;
          case 2:
            questionText += `* ${tempNum2} `;
            tempNum1 = tempNum1 * tempNum2;
            break;
          case 3:
            questionText += `/ ${tempNum2} `;
            tempNum1 /= tempNum2;
            break;
        }
      }
    
      questionText += '= ?';
    }
    
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
          setCorrectAnswersCount(0, generateQuestion);
        }
      } else {
        setIsCorrect(false);
        setCorrectAnswersCount(0);
      }
      generateQuestion();
    } catch (error) {
      console.error('Error evaluating the expression:', error);
    }
  };
  
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
      <Button title="Check Answer" onPress={checkAnswer} />
      {isCorrect !== null && (
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>{correctAnswersCount}</Text>
        </View>
      )}
      <Button title="Next Question" onPress={generateQuestion} />
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default MathGame;
