import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, Alert, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { animalGameStyles as styles } from "./styles/animalGameStyle";



const AnimalGame = () => {


  let animalImages = [
    { image: require("../images/animals/bear.png"), name: "Bear" },
    { image: require("../images/animals/cat.png"), name: "Cat" },
    { image: require("../images/animals/cow.png"), name: "Cow" },
    { image: require("../images/animals/crocodile.png"), name: "Crocodile" },
    { image: require("../images/animals/elephant.png"), name: "Elephant" },
    { image: require("../images/animals/fox.png"), name: "Fox" },
    { image: require("../images/animals/hippo.png"), name: "Hippo" },
    { image: require("../images/animals/lion.png"), name: "Lion" },
    { image: require("../images/animals/monkey.png"), name: "Monkey" },
    { image: require("../images/animals/panda.png"), name: "Panda" },
    { image: require("../images/animals/pig.png"), name: "Pig" },
    { image: require("../images/animals/rabbit.png"), name: "Rabbit" },
    { image: require("../images/animals/sheep.png"), name: "Sheep" },
    { image: require("../images/animals/squirrel.png"), name: "Squirrel" },
    { image: require("../images/animals/tiger.png"), name: "Tiger" },
    { image: require("../images/animals/zebra.png"), name: "Zebra" },

  ];

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };


  animalImages = shuffleArray(animalImages);
  const navigation = useNavigation();
  const [currentAnimal, setCurrentAnimal] = useState(Math.floor(Math.random() * animalImages.length));
  const [lives, setLives] = useState(3);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showSignImage, setShowSignImage] = useState(false);


  useEffect(() => {
    setShowSignImage(false);
  }, [currentAnimal]);

    
  useEffect(() => {
    generateOptions();
  }, [currentAnimal]);

  
  
  const signImages = [
    require("../images/animalSigns/bear.png"),
    require("../images/animalSigns/cat.png"),
    require("../images/animalSigns/cow.png"),
    require("../images/animalSigns/crocodile.png"),
    require("../images/animalSigns/elephant.png"),
    require("../images/animalSigns/fox.png"),
    require("../images/animalSigns/hippo.png"),
    require("../images/animalSigns/lion.png"),
    require("../images/animalSigns/monkey.png"),
    require("../images/animalSigns/panda.png"),
    require("../images/animalSigns/pig.png"),
    require("../images/animalSigns/rabbit.png"),
    require("../images/animalSigns/sheep.png"),
    require("../images/animalSigns/squirrel.png"),
    require("../images/animalSigns/tiger.png"),
    require("../images/animalSigns/zebra.png"),
  ];

  const getRandomAnimals = () => {
    const allAnimals = animalImages.map((animal) => animal.name);
    const currentAnimalName = animalImages[currentAnimal].name;
    const filteredAnimals = allAnimals.filter(animal => animal !== currentAnimalName);
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
      setCorrectAnswers(correctAnswers + 1);
      setShowSignImage(true);
    } else {
      setLives(lives - 1);
      setCorrectAnswers(0);
      Alert.alert(`Incorrect! Lives left: ${lives - 1}, Try again.`);
      if (lives - 1 === 0) {
        Alert.alert("Game Over", "Good luck next time! You almost had it.", [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Home');
            },
          },
        ]);
      }
    }
  };

  const handleNextQuestion = () => {
    const newAnimalIndex = Math.floor(Math.random() * animalImages.length);
    if (newAnimalIndex !== currentAnimal) {
      setCurrentAnimal(newAnimalIndex);
    } else {
      handleNextQuestion();
    }
  
    const allAnimalsShown = animalImages.every((animal, index) => index !== currentAnimal);
    if (allAnimalsShown) {
      Alert.alert("You won!");
      setTimeout(() => {
        navigation.navigate("Home");
      }, 3000);
    }
  };

  const generateOptions = () => {
    const shuffledAnimalImages = shuffleArray(animalImages);
    
    const currentIndex = currentAnimal % animalImages.length;
    const currentAnimalImage = shuffledAnimalImages[currentIndex].image;

    const options = getRandomAnimals(currentAnimalImage);
    const buttons = options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={styles.buttonContainer}
        onPress={() => handleButtonPress(option)}
        disabled={showSignImage}
      >
        <Text style={styles.buttonText}>{option}</Text>
      </TouchableOpacity>
    ));
    
    const buttonsColumn1 = buttons.slice(0, 2);
    const buttonsColumn2 = buttons.slice(2);

    return (
      <View style={styles.optionsContainer}>
        <View style={styles.column}>
          {buttonsColumn1}
        </View>
        <View style={styles.column}>
          {buttonsColumn2}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {showSignImage ? (
          <Image source={signImages[currentAnimal]} style={styles.image} />
        ) : (
          <Image
            source={animalImages[currentAnimal].image}
            style={styles.image}
          />
        )}
      </View>

      <Text style={styles.livesText}>Lives: {lives}</Text>
      
      {showSignImage && (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleNextQuestion}
        >
          <Text style={styles.buttonText}>Next Question</Text>
        </TouchableOpacity>
      )}

      {!showSignImage && (
        <View style={styles.optionsContainer}>
          {generateOptions()}
        </View>
      )}
    </View>
  );
};


export default AnimalGame;