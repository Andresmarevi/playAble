import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    width: '100%', // Make the buttons take the full width
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#87CEFA',
  },
  loginButton: {
    backgroundColor: '#3498db', // Change the login button background color
  },
  loginButtonText: {
    color: 'white', // Change the login button text color
  },
});
