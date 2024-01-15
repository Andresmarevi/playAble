// JuegoUno.js
import React from 'react'
import {View, Button, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const JuegoUno = () =>{
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            {/* Aquí va el código del juego */}
            <Button title='Regresar'
            onPress={ ()=> navigation.goBack()}/>
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
    }
})