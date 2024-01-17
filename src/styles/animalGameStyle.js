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
    width: 400, // Ajusta el tamaño según sea necesario
    height: 400,
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
