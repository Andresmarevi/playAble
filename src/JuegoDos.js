// JuegoDos.js
import React from 'react'
import {View, Button, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const JuegoDos = () =>{
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            {/* Aquí va el código del juego */}
            <Button title='Regresar'
            onPress={ ()=> navigation.goBack()}/>
        </View>
    )
}

export default JuegoDos

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to generate a math question
  function generateQuestion() {
    var num1 = getRandomNumber(1, 10);
    var num2 = getRandomNumber(1, 10);
    var operator = ['+', '-', '*'][getRandomNumber(0, 2)];
    var question = num1 + ' ' + operator + ' ' + num2;
    return { question: question, answer: eval(question) };
  }
  
  // Function to check the user's answer
  function checkAnswer(userAnswer, currentQuestion) {
    if (!isNaN(userAnswer)) {
      userAnswer = parseFloat(userAnswer);
      if (userAnswer === currentQuestion.answer) {
        return 'Correct! Well done!';
      } else {
        return 'Incorrect. Try again!';
      }
    } else {
      return 'Please enter a valid number.';
    }
  }
  
  // Initial setup
  var currentQuestion = generateQuestion();
  
  // Game loop
  while (true) {
    console.log('What is ' + currentQuestion.question + '?');
    var userAnswer = prompt('Your Answer:');
    
    if (userAnswer === 'exit') {
      console.log('Goodbye!');
      break;
    }
  
    var result = checkAnswer(userAnswer, currentQuestion);
    console.log(result);
  
    // Generate a new question
    currentQuestion = generateQuestion();
  }