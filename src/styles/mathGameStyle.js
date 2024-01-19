// import { StyleSheet } from 'react-native';

// export const mathGameStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#87CEFA', 
//   },
//   question: {
//     fontSize: 20,
//     marginBottom: 20,
//     borderColor: 'gray',
//   },
//   input: {
//     height: 40,
//     width: '80%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     textAlign: 'center',
//     color: 'black',
//     backgroundColor: 'white',
//   },
//   result: {
//     fontSize: 18,
//     marginTop: 10,
//     color: 'green',
//   },
//   counterContainer: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     backgroundColor: 'lightblue',
//     padding: 5,
//     borderRadius: 10,
//   },
//   counterText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   buttonContainer: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   width: '80%',
//   marginTop: 0, // or another specific value
// },

// });


import { StyleSheet } from 'react-native';

export const mathGameStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEFA',
  },
  question: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  numberImage: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
  },
  counterContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'lightblue',
    padding: 5,
    borderRadius: 10,
  },
  counterText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 0, // or another specific value
  },
});

