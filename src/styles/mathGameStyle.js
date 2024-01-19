import { StyleSheet } from 'react-native';

export const mathGameStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
    resizeMode: 'strech',
  },
  operatorText: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    textAlign: 'center',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 24,
    marginBottom: 20,
  },
});