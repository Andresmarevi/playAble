import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Alert, Text } from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';

const AnimalGame = () => {
  const navigation = useNavigation();
  const [currentAnimal, setCurrentAnimal] = useState(0);
  const [lives, setLives] = useState(3);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const videoRef = useRef(null);

  const resetGame = () => {
    const randomAnimalIndex = Math.floor(Math.random() * animalImages.length);
    setCurrentAnimal(randomAnimalIndex);
    setLives(3);
    setCorrectAnswers(0);
    setShowVideo(false);
  };

  const handleVideoEnd = () => {
    setShowVideo(false);
  
    if (currentAnimal + 1 < animalImages.length) {
      setCurrentAnimal(currentAnimal + 1);
    } else {
      Alert.alert('¡You won!');
      setTimeout(() => {
        navigation.navigate('Home');
      }, 3000);
    }
  
    // Check if videoRef is not null before using it
    if (videoRef.current) {
      videoRef.current.seek(0); // Reset the video to the beginning
    }
  };

  const handleButtonPress = (option) => {
    if (option === animalImages[currentAnimal].name) {
      Alert.alert('Correct!');
      setCorrectAnswers(correctAnswers + 1);

      if (currentAnimal + 1 < animalImages.length) {
        setShowVideo(true);
      } else {
        Alert.alert('¡You won!');
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

  return (
    <View style={styles.container}>
      {showVideo ? (
        <Video
          source={animalImages[currentAnimal].video}
          ref={videoRef}
          onEnd={handleVideoEnd}
          style={styles.video}
        />
      ) : (
        <>
          <Image source={animalImages[currentAnimal].image} style={styles.image} />
          <Text style={styles.livesText}>Lives: {lives}</Text>
          <Text style={styles.correctAnswersText}>Correct answers: {correctAnswers}</Text>
          {generateOptions()}
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Come back</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const animalImages = [
  { image: require('../images/animals/bear.png'), name: 'Bear', video: require('../videos/prueba.mp4') }, 
  { image: require('../images/animals/cat.png'), name: 'Cat', video: require('../videos/prueba.mp4') },
  { image: require('../images/animals/cow.png'), name: 'Cow', video: require('../videos/prueba.mp4') },
  { image: require('../images/animals/crocodile.png'), name: 'Crocodile',video: require('../videos/prueba.mp4') },
  { image: require('../images/animals/elephant.png'), name: 'Elephant',video: require('../videos/prueba.mp4') },
  { image: require('../images/animals/fox.png'), name: 'Fox',video: require('../videos/prueba.mp4') },
  { image: require('../images/animals/hippo.png'), name: 'Hippo',video: require('../videos/prueba.mp4') },
  { image: require('../images/animals/lion.png'), name: 'Lion',video: require('../videos/prueba.mp4') },
  { image: require('../images/animals/monkey.png'), name: 'Monkey',video: require('../videos/prueba.mp4') },
  { image: require('../images/animals/panda.png'), name: 'Panda',video: require('../videos/prueba.mp4') },
  { image: require('../images/animals/pig.png'), name: 'Pig',video: require('../videos/prueba.mp4') },
  { image: require('../images/animals/rabbit.png'), name: 'Rabbit',video: require('../videos/prueba.mp4') },
  { image: require('../images/animals/sheep.png'), name: 'Sheep',video: require('../videos/prueba.mp4') },
  { image: require('../images/animals/squirrel.png'), name: 'Squirrel',video: require('../videos/prueba.mp4') },
  { image: require('../images/animals/tiger.png'), name: 'Tiger',video: require('../videos/prueba.mp4') },
  { image: require('../images/animals/zebra.png'), name: 'Zebra',video: require('../videos/prueba.mp4') },
];

const getRandomAnimals = (excludeIndex) => {
  const allAnimals = animalImages.map(animal => animal.name);
  const currentAnimalName = animalImages[excludeIndex].name; // Use excludeIndex here
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEFA',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  optionsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '45%',
    margin: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: '#4c00b0',
    fontSize: 18,
  },
  livesText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  correctAnswersText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  video: {
    width: '100%',
    height: 200,
  },
});

export default AnimalGame;

