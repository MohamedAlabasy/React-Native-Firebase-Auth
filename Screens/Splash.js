/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, StyleSheet, ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';



export default function Splash({ navigation }) {
    const [initializing, setInitializing] = React.useState(true);
    const [user, setUser] = React.useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    React.useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    function goToHomeScreen() {
        AsyncStorage.getItem('isFirstTime').then((res) => {
            setTimeout(() => {
                if (res) {
                    if (user) {
                        navigation.replace("Home");
                    } else {
                        navigation.replace("SignIn");
                    }
                } else {
                    navigation.replace("Onboard");
                }
            }, 3000);
        })
    }

    return (
        <View style={style.container} >
            {/* to control in Control StatusBar */}
            < Image
                style={style.splashIcon}
            // source={require('../assets/splash.png')}
            />
            <ActivityIndicator size="large" color="#fff" style={{ marginTop: 30 }} />
            {goToHomeScreen()}
        </View >
    )

}


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4a5cD0',
    },
    splashIcon: {
        width: 250,
        height: 250,
    },
});