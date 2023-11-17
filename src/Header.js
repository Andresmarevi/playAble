import React from 'react'
import {View, Text, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Header = (props) =>{
    const navigation = useNavigation();
    return(
        <View style={{margin:15}}>
            <Text style={{fontWeight:'bold', fontSize:30, color:'white'}}>
                {props.name}
            </Text>
        <Button title='Add notes'
             onPress={ ()=> navigation.navigate('NoteAdd')}/>
        </View>
    )
}

export default Header