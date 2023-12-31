import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/color';
import * as ScreenOrientation from "expo-screen-orientation";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function Homescreen() {
    const [isLoading, setisLoading] = useState('0');
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    const [isIntervalRunning, setIsIntervalRunning] = useState('0');
    const [enteredNumber2, setenteredNumber2] = useState('------');
    const [arrData, setarrData] = useState([]);
    const [detailArr, setdetailArr] = useState([]);
    const [resultData, setresultData] = useState('');

    const intervalRef = React.useRef(null);

    const startGenerate = () => {
        // playSound();

        setIsIntervalRunning('1');
        intervalRef.current = setInterval(getGenerate, 30);
    }

    const stopGenerate = () => {
        findPersonByName();
        // stopSound();
        setIsIntervalRunning('0');
        clearInterval(intervalRef.current);
    }

    const getGenerate = () => {
        let myArr = ['AAAAAAA', 'BBBBBBB', 'CCCCCCC', 'DDDDDDDD',
            'EEEEEEEE', 'FFFFFFF', 'GGGGGGGG', 'HHHHHHHH'];
        getRandomNumber(arrData);
    };

    const getRandomNumber = (myArr) => {
        const randomObject = myArr[Math.floor(Math.random() * myArr.length)];
        setenteredNumber2(randomObject);
    }



    useEffect(() => {
        urlgetArrLC();
        getDetailLC();
    }, []);


    const urlgetArrLC = async () => {
        fetch('https://admin.digitalevent.online/api/lcList')
            .then((response) => response.json())
            .then((json) => {
                setarrData(json);
                setisLoading('1');
            })
            .catch((error) => { console.log(error) });
    }

    const getDetailLC = async () => {
        setisLoading('0');
        fetch('https://admin.digitalevent.online/api/lsFullArray')
            .then((response) => response.json())
            .then((json) => {
                setdetailArr(json);
                // saveArrLC(JSON.stringify(json));
                // console.log(JSON.stringify(json));
                setisLoading('1');
            })
            .catch((error) => { console.log(error) });
    }

    const findPersonByName = () => {
        const bruno =  detailArr.find((person) => person.unique_code === enteredNumber2);
        setresultData(bruno.fullname)
        console.log(bruno.fullname);
    };


    const keyAsync = 'arrLc';
    const getArrLC = () => {
        try {
            AsyncStorage.getItem(keyAsync).then(value => {
                if (value != null) {
                    // console.log(value);
                    const bruno =  value.find((person) => person.nik === '971123');
                    console.log(bruno);
                } else {
                    getDetailLC();
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const saveArrLC = async jsonValue => {
        try {
            await AsyncStorage.setItem(keyAsync, jsonValue);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <LinearGradient colors={[Colors.accent500, Colors.accent600]} style={styles.rootScreen}>
            <StatusBar hidden />
            <ImageBackground
                source={require('../assets/images/bg_aniv3.png')}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={[styles.rootScreen, { justifyContent: 'center' }]}>
                    {isLoading == '1' &&
                        <View style={[styles.inputContainer]}>
                            <Text style={[styles.numberInput,]}>{enteredNumber2}</Text>
                        </View>
                    }
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Text>{resultData}</Text>
                        <View style={{ width: 100, height: 100 }}>

                            {isIntervalRunning == '0' && (
                                <>
                                    {isLoading == '1' &&
                                        <TouchableOpacity onPress={startGenerate} >
                                            <Image
                                                style={styles.image}
                                                source={require('../assets/images/start.png')}
                                                contentFit="cover"
                                                transition={1000}
                                            />
                                        </TouchableOpacity>
                                    }
                                    {isLoading == '0' &&
                                        <ActivityIndicator />
                                    }
                                </>

                                // <TouchableOpacity onPress={startGenerate} style={styles.btn_start}>
                                //     <Text>START</Text>
                                // </TouchableOpacity>
                            )}
                            {isIntervalRunning == '1' && (
                                <TouchableOpacity onPress={stopGenerate} >
                                    <Image
                                        style={styles.image}
                                        source={require('../assets/images/stop.png')}
                                        contentFit="cover"
                                        transition={1000}
                                    />
                                </TouchableOpacity>

                            )}
                        </View>


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
        opacity: 0.9,
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
        marginTop: '8%',
        marginHorizontal: '15%',
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 10,
        shadowOpacity: 0.5,
        opacity: 1,
    },
    numberInput: {
        height: 80,
        width: '100%',
        fontSize: 60,
        borderBottomColor: Colors.primary800,
        borderBottomWidth: 0,
        color: '#000',
        marginVertical: 2,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
