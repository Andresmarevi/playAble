import { StyleSheet } from 'react-native';

export const animalGameStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEFA',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  optionsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '45%',
    margin: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
  livesText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  correctAnswersText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  video: {
    width: '100%',
    height: 200,
  },
});
