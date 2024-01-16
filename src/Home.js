import React, {useState, useEffect} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Home = () =>{
    const [notes, setNotes] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {

    }, []);

    return(
        <View>
  <View style={{ flexDirection: 'column', justifyContent: 'center', marginBottom: 20, marginTop: 280 }}>
    <Button title='Animals'
      onPress={() => navigation.navigate('AnimalGame')}
    />
    <Button title='Maths'
      onPress={() => navigation.navigate('MathGame')}
    />
  </View>
</View>

    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    noteView:{
        flex:1,
        backgroundColor: '#fff',
        margin:10,
        padding:10,
        borderRadius:10,
        shadowColor:'red',
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.8,
        shadowRadius:2,
        elevation:7,
        alignItems:'center'
    },
    noteTitle: {
        fontSize:20,
        fontWeight:'bold'
    },
    Button:{
        fontSize:50,
        marginTop: 5  
    }
})