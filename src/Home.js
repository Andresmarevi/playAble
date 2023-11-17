import React, {useState, useEffect} from 'react'
import {View, Text, Button, StyleSheet, style} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FlashList } from '@shopify/flash-list'
import {firebase} from '../config'

const Home = () =>{
    const [notes, setNotes] = useState([]);
    const navigation = useNavigation();


    useEffect(() => {
        firebase.firestore()
        .collection('notes')
        .onSnapshot((querySnapshot) => {
            const newNotes = [];
            querySnapshot.forEach((doc) => {
                const {note, title} = doc.data();
                newNotes.push({note, title, id: doc.id});
            });
            setNotes(newNotes);
        });
    }, []);
    return(
        <View style={styles.container}>
            <FlashList
                data={notes}
                numColumns={2}
                estimatedItemSize={100}
                renderItem={({item}) => (
                    <View style={styles.noteView}>
                        <Text style={styles.noteTitle}>
                            {item.title}
                        </Text>
                        <Text style={styles.noteDescription}>
                            {item.note}
                        </Text>
                    </View>
                )}
            />    
        <Button title='Add notes'
             onPress={ ()=> navigation.navigate('NoteAdd')}/>
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
    noteDescription:{
        fontSize:16,
        marginTop: 5
    }
})