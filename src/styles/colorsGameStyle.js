import { StyleSheet } from 'react-native';

export const colorsGameStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewPager: {
        flex: 1,
        width: '100%',
    },
    pageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    colorDisplay: {
        width: 200, // Ajusta el tamaño del color según sea necesario
        height: 100,
        borderRadius: 10,
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    nextButton: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    });