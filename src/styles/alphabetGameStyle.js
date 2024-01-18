import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      width: 100,
      height: 100,
      borderRadius: 10,
      backgroundColor: '#eee',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    gestureText: {
      fontSize: 40,
    },
    input: {
      height: 40,
      width: 200,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    button: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    scoreText: {
      fontSize: 18,
      marginTop: 20,
      fontWeight: 'bold',
    },
  });