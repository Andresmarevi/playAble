import React from 'react'
import {View, Text, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Header = (props) =>{
    const navigation = useNavigation();
    return(
        <View style={{margin:15}}>
        <Button title='Login'
             onPress={ ()=> navigation.navigate('Login')}/>
        </View>
    )
}

export default Header