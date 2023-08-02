import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from "react";
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/color';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export default function Dashboardscreen() {
    const navigation = useNavigation();
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    const [isLoading, setisLoading] = useState('0');
    
    const btnLuckydraw = () => {
        urlgetArrLC();
        getDetailLC();
    }

    const urlgetArrLC = async () => {
        setisLoading('1');
        fetch('https://admin.digitalevent.online/api/lcList')
            .then((response) => response.json())
            .then((json) => {
                savelistLucky(JSON.stringify(json));
                setisLoading('0');
            })
            .catch((error) => { console.log(error) });
    }

    const getDetailLC = async () => {
        setisLoading('1');
        fetch('https://admin.digitalevent.online/api/lsFullArray')
            .then((response) => response.json())
            .then((json) => {
                savedetailLucky(JSON.stringify(json));
                setisLoading('0');
                navigation.navigate('LUCKYDRAW');
            })
            .catch((error) => { console.log(error) });
    }

    const listLucky = 'listLucky';
    const savelistLucky = async jsonValue => {
        try {
            await AsyncStorage.setItem(listLucky, jsonValue);
        } catch (error) {
            console.log(error);
        }
    }
    const detailLucky = 'detailLucky';
    const savedetailLucky = async jsonValue => {
        try {
            await AsyncStorage.setItem(detailLucky, jsonValue);
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
                    <View style={{ height: 80, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                        {isLoading == '0' &&
                            <>
                                <TouchableOpacity onPress={btnLuckydraw} style={styles.button}>
                                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>LUCKY DRAW</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>GREETING'S</Text>
                                </TouchableOpacity>
                            </>
                        }
                        {isLoading == '1' &&
                            <ActivityIndicator />
                        }

                    </View>
                </SafeAreaView>

            </ImageBackground>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    button: {
        backgroundColor: '#DAA520',
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        margin: 10,
        borderColor: '#FFD700',
        borderWidth: 2,

    },
    btn_top: {
        position: 'absolute',
        backgroundColor: '#DAA520', width: 50,
        height: 30, margin: 20, justifyContent: 'center',
        alignItems: 'center', borderRadius: 8, opacity: 0.7,
        borderBottomColor: '#FFD700', borderWidth: 1
    },
    
})