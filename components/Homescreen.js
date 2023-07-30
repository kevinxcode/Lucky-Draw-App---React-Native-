import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/color';
import * as ScreenOrientation from "expo-screen-orientation";


export default function Homescreen() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    const [isIntervalRunning, setIsIntervalRunning] = useState('0');
    const [enteredNumber2, setenteredNumber2] = useState('------');

    const intervalRef = React.useRef(null);
    const startGenerate = () => {
            setIsIntervalRunning('1');
            intervalRef.current = setInterval(getGenerate, 30); 
    }

    const stopGenerate = () => {
        setIsIntervalRunning('0');
        clearInterval(intervalRef.current);
    }
    
    const getGenerate = () => {
        let myArr = ['AAA', 'BBB', 'CCC', 'DDD',
            'EEE', 'FFF', 'GGG', 'HHH'];
        getRandomNumber(myArr);
      };

    
    const getRandomNumber = (myArr) => {
        const randomObject = myArr[Math.floor(Math.random() * myArr.length)];
        setenteredNumber2(randomObject);
    }
    return (
        <LinearGradient colors={[Colors.primary400, Colors.accent500]} style={styles.rootScreen}>

            <ImageBackground
                source={require('../assets/images/background.png')}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootScreen}>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.numberInput} autoCapitalize="true" autoCorrect={false}
                            value={enteredNumber2}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    {isIntervalRunning=='0' && (
                        <TouchableOpacity onPress={startGenerate} style={styles.btn_start}>
                            <Text>START</Text>
                        </TouchableOpacity>
                    )}
                    {isIntervalRunning=='1' && (
                        <TouchableOpacity onPress={stopGenerate} style={styles.btn_start}>
                        <Text>STOP</Text>
                        </TouchableOpacity> 
                    )}
                    
                        
                    </View>

                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },
    btn_start: {
        backgroundColor: 'red',
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        margin: 10
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
        marginTop: '10%',
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary600,
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
        color: '#fff',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});
