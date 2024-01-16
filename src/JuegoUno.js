// // JuegoUno.js
// import React, { useState } from 'react'
// import { View, Button, StyleSheet, Image, Alert } from 'react-native'
// import { useNavigation } from '@react-navigation/native'

// const JuegoUno = () => {
//     const navigation = useNavigation();
//     const [currentAnimal, setCurrentAnimal] = useState(0);

//     const animals = [
//         {
//             image: require('../images/istockphoto-174432616-612x612.jpeg'),
//             options: ['Gorila', 'Jirafa', 'Andres', 'Javi'],
//             correctOption: 'Javi'
//         },
//         {
//             image: require('../images/istockphoto-174432616-612x612.jpeg'), // Reemplaza esto con la ruta a tu segunda imagen
//             options: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'], // Reemplaza esto con tus opciones para el segundo animal
//             correctOption: 'Opción 1' // Reemplaza esto con la opción correcta para el segundo animal
//         }
//         // Puedes agregar más animales aquí...
//     ];

//     const handleButtonPress = (option) => {
//         if (option === animals[currentAnimal].correctOption) {
//             Alert.alert('Correcto!');
//             setCurrentAnimal(currentAnimal + 1);
//         } else {
//             Alert.alert('Incorrecto! Intenta de nuevo.');
//         }
//     }

//     return (
//         <View style={styles.container}>
//             <Image source={animals[currentAnimal].image} style={styles.image} />
//             {animals[currentAnimal].options.map((option, index) => (
//                 <Button key={index} title={option} onPress={() => handleButtonPress(option)} />
//             ))}
//             <Button title='Regresar' onPress={ ()=> navigation.goBack()}/>
//         </View>
//     )
// }

// export default JuegoUno

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff'
//     },
//     image: {
//         width: 200,
//         height: 200,
//         marginBottom: 20
//     },
// })


import React, { useState } from 'react';
import { View, Button, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const JuegoUno = () => {
    const navigation = useNavigation();
    const [currentAnimal, setCurrentAnimal] = useState(0);

    const animalImages = [
        { image: require('../images/animals/bear.png'), name: 'Bear' },
        { image: require('../images/animals/cat.png'), name: 'Cat' },
        { image: require('../images/animals/cow.png'), name: 'Cow' },
        { image: require('../images/animals/crocodile.png'), name: 'Crocodile' },
        { image: require('../images/animals/elephant.png'), name: 'Elephant' },
        { image: require('../images/animals/fox.png'), name: 'Fox' },
        { image: require('../images/animals/hippo.png'), name: 'Hippo' },
        { image: require('../images/animals/jiraffe.png'), name: 'Jiraffe' },
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
            if (currentAnimal + 1 < animalImages.length) {
                setCurrentAnimal(currentAnimal + 1);
            } else {
                Alert.alert('¡You won!');
                setTimeout(() => {
                    navigation.navigate('Home'); // Reemplaza 'Home' con el nombre de tu página principal
                }, 3000);
            }
        } else {
            Alert.alert('Incorrect! Try again.');
        }
    };

    const generateOptions = () => {
        const options = getRandomAnimals(currentAnimal);
        return options.map((option, index) => (
            <Button key={index} title={option} onPress={() => handleButtonPress(option)} />
        ));
    };

    return (
        <View style={styles.container}>
            <Image source={animalImages[currentAnimal].image} style={styles.image} />
            {generateOptions()}
            <Button title='Regresar' onPress={() => navigation.goBack()} />
        </View>
    );
};

export default JuegoUno;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
});

// Con la fire base

// import React, { useState, useEffect } from 'react';
// import { View, Button, StyleSheet, Image, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import database from '@react-native-firebase/database'; // Importa el módulo necesario de Firebase

// const JuegoUno = () => {
//     const navigation = useNavigation();
//     const [currentAnimal, setCurrentAnimal] = useState(0);
//     const [animalImages, setAnimalImages] = useState([]);

//     useEffect(() => {
//         // Recupera los datos de Firebase (asumiendo que tienes una estructura adecuada en tu base de datos)
//         const fetchAnimalImages = async () => {
//             try {
//                 const snapshot = await database().ref('animalImages').once('value');
//                 if (snapshot.exists()) {
//                     const data = snapshot.val();
//                     setAnimalImages(data);
//                 }
//             } catch (error) {
//                 console.error('Error fetching animal images:', error);
//             }
//         };

//         fetchAnimalImages();
//     }, []);

//     const getRandomAnimals = (excludeIndex) => {
//         const allAnimals = animalImages.map(animal => animal.name);
//         const currentAnimalName = animalImages[currentAnimal].name;
//         const filteredAnimals = allAnimals.filter((animal, index) => index !== excludeIndex);
//         const randomAnimals = [];

//         // Elige tres animales aleatorios diferentes
//         while (randomAnimals.length < 3) {
//             const randomIndex = Math.floor(Math.random() * filteredAnimals.length);
//             const randomAnimal = filteredAnimals[randomIndex];
//             randomAnimals.push(randomAnimal);
//             filteredAnimals.splice(randomIndex, 1);
//         }

//         // Añade el nombre del animal actual como una de las opciones
//         const correctOptionIndex = Math.floor(Math.random() * 4);
//         randomAnimals.splice(correctOptionIndex, 0, currentAnimalName);

//         return randomAnimals;
//     };

//     const handleButtonPress = (option) => {
//         if (option === animalImages[currentAnimal].name) {
//             Alert.alert('Correcto!');
//             if (currentAnimal + 1 < animalImages.length) {
//                 setCurrentAnimal(currentAnimal + 1);
//             } else {
//                 Alert.alert('¡Juego completado!');
//             }
//         } else {
//             Alert.alert('Incorrecto! Intenta de nuevo.');
//         }
//     };

//     const generateOptions = () => {
//         const options = getRandomAnimals(currentAnimal);
//         return options.map((option, index) => (
//             <Button key={index} title={option} onPress={() => handleButtonPress(option)} />
//         ));
//     };

//     return (
//         <View style={styles.container}>
//             {animalImages.length > 0 && (
//                 <Image source={{ uri: animalImages[currentAnimal].imageUrl }} style={styles.image} />
//             )}
//             {generateOptions()}
//             <Button title='Regresar' onPress={() => navigation.goBack()} />
//         </View>
//     );
// };

// export default JuegoUno;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff'
//     },
//     image: {
//         width: 200,
//         height: 200,
//         marginBottom: 20
//     },
// });
