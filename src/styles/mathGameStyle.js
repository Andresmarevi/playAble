import { StyleSheet } from 'react-native';

export const mathGameStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEFA',
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  numberImage: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    resizeMode: 'stretch',
  },
  operatorText: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#ecf0f1',
    textAlign: 'center',
    fontSize: 18,
  },
  scoreText: {
    fontSize: 24,
    marginBottom: 20,
  },
});