import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    alignContent: 'center',
    fontSize: 30,
    marginBottom: 100,
    color: '#ecf0f1',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#3498db', 
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#ecf0f1',
  },
  input: {
    height: 40,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: '#ecf0f1', 
    color: '#2c3e50', 
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#27ae60', // Emerald green button color
    color: '#ecf0f1', // Light gray text color
    paddingVertical: 12,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
    // Center the text vertically within the button
    alignItems: 'center',
  },
});

