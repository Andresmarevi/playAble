import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#3498db', // Light blue background color
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#ecf0f1', // Light gray text color
  },
  input: {
    height: 40,
    borderColor: '#bdc3c7', // Light gray border color
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: '#ecf0f1', // Light gray background color
    color: '#2c3e50', // Dark gray text color
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
  registerText: {
    marginTop: 20,
    color: 'black', // Light blue text color
    textAlign: 'center',
    fontSize: 16,
  },
});
