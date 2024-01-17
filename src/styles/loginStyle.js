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
    color: 'black', // Adjusted color to match the pattern
    fontWeight: 'bold', // Added fontWeight
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'lightblue', // Adjusted borderColor to match the pattern
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5, // Added borderRadius
    color: 'black',
    backgroundColor: 'white',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

