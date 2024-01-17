import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEFA',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'lightblue',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
    color: 'black',
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginBottom: 10, // Separation between buttons
  },
  button: {
    backgroundColor: 'lightgreen',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

