import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Image, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importa tus estilos
import { mathGameStyles as styles } from "./styles/mathGameStyle";

const MathGame = () => {
  const navigation = useNavigation();

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

  const [numImage1, setNumImage1] = useState(null);
  const [numImage2, setNumImage2] = useState(null);
  const [operator, setOperator] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');

  const generateOperator = () => {
    const operators = ['+', '-'];
    return operators[Math.floor(Math.random() * operators.length)];
  };

  const applyOperator = (num1, num2, operator) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      default:
        return null;
    }
  };

  const generateQuestion = () => {
    const index1 = Math.floor(Math.random() * numberImages.length);
    const index2 = Math.floor(Math.random() * numberImages.length);
    const operator = generateOperator();
    const answer = applyOperator(parseInt(numberImages[index1].name), parseInt(numberImages[index2].name), operator);

    setNumImage1(numberImages[index1]);
    setNumImage2(numberImages[index2]);
    setOperator(operator);
    setCorrectAnswer(answer);
  };

  const [score, setScore] = useState(0);

  const checkAnswer = () => {
    if (parseInt(userAnswer) === parseInt(correctAnswer)) {
      Alert.alert('Correcto!');
      setScore(score + 1);
    } else {
      Alert.alert('Incorrecto!');
      setScore(0);
    }
    setUserAnswer('');
    generateQuestion();
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.scoreText}>Score: {score}</Text>
        <View style={styles.questionContainer}>
          {numImage1 && <Image source={numImage1.image} style={styles.numberImage} />}
          <Text style={styles.operatorText}>{operator}</Text>
          {numImage2 && <Image source={numImage2.image} style={styles.numberImage} />}
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setUserAnswer}
          value={userAnswer}
          keyboardType="numeric"
        />
        <Button title="Check Answer" onPress={checkAnswer} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MathGame;

