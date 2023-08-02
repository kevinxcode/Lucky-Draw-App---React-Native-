import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from "react";
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/color';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export default function Resultscreen() {
    const navigation = useNavigation();
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    const [isLoading, setisLoading] = useState('0');



    return (
        <LinearGradient colors={[Colors.accent500, Colors.accent600]} style={styles.rootScreen}>
            <StatusBar hidden />
            <ImageBackground
                source={require('../assets/images/bg0.png')}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <View style={styles.btn_top}>
                    <TouchableOpacity onPress={() => navigation.replace('DASHBOARD')}>
                        <FontAwesome5 style={{ textAlign: 'center' }} size={20} name={'arrow-circle-left'} solid />
                    </TouchableOpacity>
                </View>
                <SafeAreaView style={[styles.rootScreen]}>
                    <View style={{ width: '100%', position: 'absolute', marginTop: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}>THE WINNER</Text>
                    </View>

                    <View style={[styles.rootScreen, { justifyContent: 'center', alignItems: 'center' }]}>
                        <View style={{ padding: 12, backgroundColor: Colors.gold0001, opacity: 0.8, width: '90%', height: '78%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                            <View style={{ backgroundColor: Colors.gold0002, width: '50%', height: '100%', borderEndWidth: 3, borderEndColor: Colors.gold0001, padding: 8, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 30, color: '#fff', fontWeight: 'bold', margin: 10, borderBottomWidth: 2, borderColor: '#DAA520' }}>JTNE60365</Text>
                                <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold', margin: 0 }}>220009</Text>
                                <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold', margin: 2 }}>KEVIN ALNIZAR</Text>
                                <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold', margin: 0 }}>HR</Text>
                            </View>
                            <View style={{ backgroundColor: Colors.gold0002, width: '50%', height: '100%', padding: 8, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/images/people.jpg')}
                                    contentFit="cover"
                                    transition={1000}
                                />
                            </View>
                        </View>
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
        backgroundColor: Colors.gold0001,
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        margin: 10,
        borderColor: Colors.gold0002,
        borderWidth: 2,

    },
    btn_top: {
        position: 'absolute',
        backgroundColor: Colors.gold0001, width: 50,
        height: 30, margin: 10, justifyContent: 'center',
        alignItems: 'center', borderRadius: 8, opacity: 0.7,
        borderColor: Colors.gold0002, borderWidth: 1, zIndex: 999999,

    },
    image: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0553',
    },

})