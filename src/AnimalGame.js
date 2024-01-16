import React, { useState } from 'react';
import { View, Button, StyleSheet, Image, Alert,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


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

    const getRandomAnimals = (excludeIndex) => {
        const allAnimals = animalImages.map(animal => animal.name);
        const currentAnimalName = animalImages[currentAnimal].name;
        const filteredAnimals = allAnimals.filter((animal, index) => index !== excludeIndex);
        const randomAnimals = [];

        // Elige tres animales aleatorios diferentes
        while (randomAnimals.length < 3) {
            const randomIndex = Math.floor(Math.random() * filteredAnimals.length);
            const randomAnimal = filteredAnimals[randomIndex];
            randomAnimals.push(randomAnimal);
            filteredAnimals.splice(randomIndex, 1);
        }

        // Añade el nombre del animal actual como una de las opciones
        const correctOptionIndex = Math.floor(Math.random() * 4);
        randomAnimals.splice(correctOptionIndex, 0, currentAnimalName);

        return randomAnimals;
    };

    const handleButtonPress = (option) => {
        if (option === animalImages[currentAnimal].name) {
            Alert.alert('Correct!');
            setCorrectAnswers(correctAnswers + 1);
            if (currentAnimal + 1 < animalImages.length) {
                setCurrentAnimal(currentAnimal + 1);
            } else {
                Alert.alert('¡You won!');
                setTimeout(() => {
                    navigation.navigate('Home'); // Reemplaza 'Home' con el nombre de tu página principal
                }, 3000);
            }
        } else {
            setLives(lives - 1);
            setCorrectAnswers(0)
            Alert.alert(`Incorrect! Lives left: ${lives - 1}`, 'Try again.');
            if (lives - 1 === 0) {
                    Alert.alert(
                    'Game Over',
                    'Buena suerte para la próxima! Casi lo consigues',
                    [{ text: 'OK', onPress: resetGame }]
                );
            }
        };
    };

    const generateOptions = () => {
        const options = getRandomAnimals(currentAnimal);
        const buttons = options.map((option, index) => (
            <View key={index} style={styles.buttonContainer}>
                <Button title={option} onPress={() => handleButtonPress(option)} color="white" />
            </View>
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
            <Image source={animalImages[currentAnimal].image} style={styles.image} />
            <Text style={styles.livesText}>Lives: {lives}</Text>
            <Text style={styles.correctAnswersText}>Correct answers: {correctAnswers}</Text>
            {generateOptions()}
        <View style={styles.buttonContainer}>
            <Button title="Come back" onPress={() => navigation.goBack()} color="white" />
        </View>
    </View>
    );
};

export default AnimalGame;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4c00b0'
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        resizeMode: 'contain'
    },
    optionsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '80%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        width: '45%',
        margin: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5
    },
    livesText: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10
    }
    ,
    correctAnswersText: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10
    }
});


