// JuegoUno.js
import React, { useState } from 'react'
import { View, Button, StyleSheet, Image, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const JuegoUno = () => {
    const navigation = useNavigation();
    const [currentAnimal, setCurrentAnimal] = useState(0);

    const animals = [
        {
            image: require('../images/istockphoto-174432616-612x612.jpeg'),
            options: ['Gorila', 'Jirafa', 'Andres', 'Javi'],
            correctOption: 'Javi'
        },
        {
            image: require('../images/istockphoto-174432616-612x612.jpeg'), // Reemplaza esto con la ruta a tu segunda imagen
            options: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'], // Reemplaza esto con tus opciones para el segundo animal
            correctOption: 'Opción 1' // Reemplaza esto con la opción correcta para el segundo animal
        }
        // Puedes agregar más animales aquí...
    ];

    const handleButtonPress = (option) => {
        if (option === animals[currentAnimal].correctOption) {
            Alert.alert('Correcto!');
            setCurrentAnimal(currentAnimal + 1);
        } else {
            Alert.alert('Incorrecto! Intenta de nuevo.');
        }
    }

    return (
        <View style={styles.container}>
            <Image source={animals[currentAnimal].image} style={styles.image} />
            {animals[currentAnimal].options.map((option, index) => (
                <Button key={index} title={option} onPress={() => handleButtonPress(option)} />
            ))}
            <Button title='Regresar' onPress={ ()=> navigation.goBack()}/>
        </View>
    )
}

export default JuegoUno

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
})