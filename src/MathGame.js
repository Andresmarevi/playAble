import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MathGame = () => {
  const navigation = useNavigation();

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const newNum1 = Math.floor(Math.random() * 11);
    const newNum2 = Math.floor(Math.random() * 11);

    setNum1(newNum1);
    setNum2(newNum2);
    setQuestion(`${newNum1} + ${newNum2} = ?`);
    setUserAnswer('');
    setIsCorrect(null);
  };

  const checkAnswer = () => {
    const correctAnswer = num1 + num2;
    const userNum = parseInt(userAnswer, 10);

    if (!isNaN(userNum)) {
      setIsCorrect(userNum === correctAnswer);
    } else {
      setIsCorrect(false);
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
        <Text style={styles.result}>
          {isCorrect ? 'Correct!' : 'Incorrect. Try again!'}
        </Text>
      )}
      <Button title="Next Question" onPress={generateQuestion} />
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    textAlign: 'center',
  },
  result: {
    fontSize: 18,
    marginTop: 10,
    color: 'green',
  },
});

export default MathGame;