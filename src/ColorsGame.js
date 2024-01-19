import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const ColorGame = () => {
  const colors = [
    { name: 'Red', hex: '#FF0000' },
    { name: 'Yellow', hex: '#FFFF00' },
    { name: 'Green', hex: '#00FF00' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Brown', hex: '#8B4513' },
    { name: 'Gray', hex: '#808080' },
    { name: 'Orange', hex: '#FFA500' },
    { name: 'Pink', hex: '#FFC0CB' },
    { name: 'Purple', hex: '#800080' },
    { name: 'Tan', hex: '#D2B48C' },
  ];

  const colorsImages = [
    { image: require('../images/colors/black.png'), name: 'Black' },
    { image: require('../images/colors/blue.png'), name: 'Blue' },
    { image: require('../images/colors/brown.png'), name: 'Brown' },
    { image: require('../images/colors/gray.png'), name: 'Gray' },
    { image: require('../images/colors/green.png'), name: 'Green' },
    { image: require('../images/colors/orange.png'), name: 'Orange' },
    { image: require('../images/colors/pink.png'), name: 'Pink' },
    { image: require('../images/colors/purple.png'), name: 'Purple' },
    { image: require('../images/colors/red.png'), name: 'Red' },
    { image: require('../images/colors/tan.png'), name: 'Tan' },
    { image: require('../images/colors/white.png'), name: 'White' },
    { image: require('../images/colors/yellow.png'), name: 'Yellow' },
  ];

  const [currentColor, setCurrentColor] = useState({});
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    generateRandomColor();
    startTimer();
  }, [score]);

  const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setCurrentColor(colors[randomIndex]);
  };

  const startTimer = () => {
    setTimeLeft(50);
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          handleTimeUp();
          return 0;
        }
        return prevTime -1;
      });
    }, 1000);
  };

  const handleColorSelection = (selectedColor) => {
    if (selectedColor === currentColor.name) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore((prevScore) => Math.max(0, prevScore - 1));
    }
  };

  const handleTimeUp = () => {
    Alert.alert('Time Over.', `Your final score is: ${score}`, [
      { text: 'OK', onPress: () => setScore(0) },
    ]);
  };

  const renderColorButtons = (start, end) => {
    const columnColors = colors.slice(start, end);
    return columnColors.map((color) => (
      <TouchableOpacity
        key={color.name}
        style={styles.colorButton}
        onPress={() => handleColorSelection(color.name)}
        disabled={timeLeft === 0}
      >
        <Text style={styles.buttonText}>{color.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{`Time: ${timeLeft}s`}</Text>
      <Image
        source={currentColor.image}
        style={[styles.colorDisplay, { backgroundColor: currentColor.hex }]}
        resizeMode="cover"
      />
      <Text style={styles.instructionText}>{`Select the color: `}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.column}>
          {renderColorButtons(0, 5)}
        </View>
        <View style={styles.column}>
          {renderColorButtons(5, 10)}
        </View>
      </View>
      <Text style={styles.scoreText}>{`Score: ${score}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 18,
    marginBottom: 10,
  },
  colorDisplay: {
    width: 200,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  column: {
    alignItems: 'center',
  },
  colorButton: {
    width: 80,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black', // Set the text color
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default ColorGame;