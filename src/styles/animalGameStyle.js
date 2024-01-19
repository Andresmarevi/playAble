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
    flexDirection: 'row', // Changed flexDirection to 'row' to arrange buttons horizontally
    flexWrap: 'wrap', // Allows buttons to wrap to the next line when they exceed the container width
    width: '80%', // Adjusted width for the container
    marginVertical: 15, // Adjusted vertical margin
    backgroundColor: 'lightblue',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15, // Increased padding for button height
  },
  button: {
    width: '45%', // Adjusted width for each button
    margin: 5, // Added margin to separate buttons
    backgroundColor: 'lightblue',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    paddingVertical: 15, // Increased padding for button height
  },
  thinButtonContainer: {
    width: '25%', // Adjust the width to make the "Come back" button thinner
    marginVertical: 10, // Added margin to separate the buttons vertically
    backgroundColor: 'lightblue',
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 5, // Decreased padding for thinner button
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
    width: 300, // Ajusta el tamaño según sea necesario
    height: 300,
    resizeMode: "contain", // Ajusta la escala de la imagen
  },
  optionsContainer: {
    flexDirection: "row", // Alinea los elementos en filas en lugar de columnas
    justifyContent: "space-around", // Distribuye el espacio alrededor de los elementos
    marginTop: 10, // Puedes ajustar el margen según sea necesario
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
  },
});
