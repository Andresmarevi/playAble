import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    backgroundColor: '#27ae60', 
    color: '#ecf0f1', 
    paddingVertical: 12,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
    alignItems: 'center',
  },
  registerText: {
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
});
