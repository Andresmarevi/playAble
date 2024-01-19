import React, { useState, useEffect,useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ColorGame = () => {

  const colorsImages = [
    { image: require('../images/colors/blue.png'), name: 'Blue' },
    { image: require('../images/colors/brown.png'), name: 'Brown' },
    { image: require('../images/colors/gray.png'), name: 'Gray' },
    { image: require('../images/colors/green.png'), name: 'Green' },
    { image: require('../images/colors/orange.png'), name: 'Orange' },
    { image: require('../images/colors/pink.png'), name: 'Pink' },
    { image: require('../images/colors/purple.png'), name: 'Purple' },
    { image: require('../images/colors/red.png'), name: 'Red' },
    { image: require('../images/colors/tan.png'), name: 'Tan' },
    { image: require('../images/colors/yellow.png'), name: 'Yellow' },
  ];
  const [alertShown, setAlertShown] = useState(false);
  const [currentColor, setCurrentColor] = useState({});
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const navigation = useNavigation();

  useEffect(() => {
    generateRandomColor();
    startTimer();
  }, [score]);

  const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorsImages.length);
    setCurrentColor(colorsImages[randomIndex]);
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

  const alertShownRef = useRef(false);

  const handleTimeUp = () => {
    if (!alertShownRef.current) {
      alertShownRef.current = true;
      Alert.alert('Try again!', `Your final score is: ${score}`, [
        { text: 'OK', onPress: () => {
          setScore(0);
          alertShownRef.current = false;
          navigation.navigate('Home');
        }},
      ]);
    }
  };


  const renderColorButtons = (start, end) => {
    const columnColors = colorsImages.slice(start, end);
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
      <Text style={styles.timerText}>{`Time: ${timeLeft}`}</Text>
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
    backgroundColor: '#87CEFA',
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
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    color: 'black', 
    fontWeight: 'bold',
    fontSize:20,
  },
  scoreText: {
    fontSize: 22,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default ColorGame;