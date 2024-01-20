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
    flexDirection: 'row',
    flexWrap: 'wrap', 
    width: '80%', 
    marginVertical: 15, 
    backgroundColor: 'lightblue',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15, 
    marginBottom: 50,
  },
  button: {
    width: '45%', 
    margin: 5, 
    backgroundColor: 'lightblue',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    paddingVertical: 15, 
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
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300, 
    height: 300,
    resizeMode: "contain", 
  },
  optionsContainer: {
    flexDirection: "row", 
    justifyContent: "space-around", 
    marginTop: 10, 
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
  },
});
