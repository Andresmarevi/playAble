import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Alert, Text } from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
import { animalGameStyles as styles } from './styles/animalGameStyle';

const AnimalGame = () => {
  const navigation = useNavigation();
  const [currentAnimal, setCurrentAnimal] = useState(0);
  const [lives, setLives] = useState(3);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const resetGame = () => {
    const randomAnimalIndex = Math.floor(Math.random() * animalImages.length);
    setCurrentAnimal(randomAnimalIndex);
    setLives(3);
    setCorrectAnswers(0);
  };

  const animalImages = [
    { image: require('../images/animals/bear.png'), name: 'Bear' },
    { image: require('../images/animals/cat.png'), name: 'Cat' },
    { image: require('../images/animals/cow.png'), name: 'Cow' },
    { image: require('../images/animals/crocodile.png'), name: 'Crocodile' },
    { image: require('../images/animals/elephant.png'), name: 'Elephant' },
    { image: require('../images/animals/fox.png'), name: 'Fox' },
    { image: require('../images/animals/hippo.png'), name: 'Hippo' },
    { image: require('../images/animals/lion.png'), name: 'Lion' },
    { image: require('../images/animals/monkey.png'), name: 'Monkey' },
    { image: require('../images/animals/panda.png'), name: 'Panda' },
    { image: require('../images/animals/pig.png'), name: 'Pig' },
    { image: require('../images/animals/rabbit.png'), name: 'Rabbit' },
    { image: require('../images/animals/sheep.png'), name: 'Sheep' },
    { image: require('../images/animals/squirrel.png'), name: 'Squirrel' },
    { image: require('../images/animals/tiger.png'), name: 'Tiger' },
    { image: require('../images/animals/zebra.png'), name: 'Zebra' },
    // Puedes agregar más información de imágenes aquí...
  ];

  const animalVideos = Array(animalImages.length).fill(
    '../videos/prueba.mp4'
  );

  const getRandomAnimals = (excludeIndex) => {
    const allAnimals = animalImages.map((animal) => animal.name);
    const currentAnimalName = animalImages[currentAnimal].name;
    const filteredAnimals = allAnimals.filter((animal, index) => index !== excludeIndex);
    const randomAnimals = [];

    while (randomAnimals.length < 3) {
      const randomIndex = Math.floor(Math.random() * filteredAnimals.length);
      const randomAnimal = filteredAnimals[randomIndex];
      randomAnimals.push(randomAnimal);
      filteredAnimals.splice(randomIndex, 1);
    }

    const correctOptionIndex = Math.floor(Math.random() * 4);
    randomAnimals.splice(correctOptionIndex, 0, currentAnimalName);

    return randomAnimals;
  };

  const handleButtonPress = (option) => {
    if (option === animalImages[currentAnimal].name) {
      Alert.alert('Correct!');
      setCorrectAnswers(correctAnswers + 1);
      const videoPlayer = videoRefs[currentAnimal];
      videoPlayer.seek(0);
      videoPlayer.presentFullscreenPlayer();

      if (currentAnimal + 1 < animalImages.length) {
        setCurrentAnimal(currentAnimal + 1);
      } else {
        Alert.alert('You won!');
        setTimeout(() => {
          navigation.navigate('Home');
        }, 3000);
      }
    } else {
      setLives(lives - 1);
      setCorrectAnswers(0);
      Alert.alert(`Incorrect! Lives left: ${lives - 1}`, 'Try again.');

      if (lives - 1 === 0) {
        Alert.alert(
          'Game Over',
          'Buena suerte para la próxima! Casi lo consigues',
          [{ text: 'OK', onPress: resetGame }]
        );
      }
    }
  };

  const generateOptions = () => {
    const options = getRandomAnimals(currentAnimal);
    const buttons = options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={styles.buttonContainer}
        onPress={() => handleButtonPress(option)}
      >
        <Text style={styles.buttonText}>{option}</Text>
      </TouchableOpacity>
    ));
    return (
      <View style={styles.optionsContainer}>
        <View style={styles.row}>{buttons.slice(0, 2)}</View>
        <View style={styles.row}>{buttons.slice(2)}</View>
      </View>
    );
  };

  const videoRefs = animalImages.map(() => useRef(null));

  return (
    <View style={styles.container}>
      <Video
        ref={videoRefs[currentAnimal]}
        source={{ uri: animalVideos[currentAnimal] }}
        style={styles.video}
        paused={true}
      />
      <Image source={animalImages[currentAnimal].image} style={styles.image} />
      <Text style={styles.livesText}>Lives: {lives}</Text>
      <Text style={styles.correctAnswersText}>Correct answers: {correctAnswers}</Text>
      {generateOptions()}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Come back</Text>
      </TouchableOpacity>
    </View>
  );
};



export default AnimalGame;


