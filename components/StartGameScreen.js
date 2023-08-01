import { useState } from "react";
import { TextInput, View, Alert,  } from "react-native";
import { StyleSheet } from "react-native";
import Colors from '../constants/color';


function StartGameScreen() {
    const [enteredNumber, setenteredNumber] = useState('------');
    



    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput}  autoCapitalize="none" autoCorrect={false}
                value={enteredNumber}
            />
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
        marginTop: '15%',
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary000,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        opacity: 0.8,
    },
    numberInput: {
        height: 50,
        width: '100%',
        fontSize: 45,
        borderBottomColor: Colors.primary800,
        borderBottomWidth: 2,
        color: Colors.primary800,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});