/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, StyleSheet, ActivityIndicator, ActivityIndicatorProps } from 'react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Splash extends React.Component {

    goToHomeScreen() {
        //     AsyncStorage.getItem('isFirstTime').then((res) => {
        setTimeout(() => {
            //             // To prevent back to splash again
            //             // this.props.navigation.replace("Home");
            this.props.navigation.replace("Onboard");
            //             if (!res) {
            // this.props.navigation.replace("Home");
            //             } else {
            //                 this.props.navigation.replace("Onboard");
            //             }
        }, 3000);
        //     })
    }
    render() {
        return (
            <View style={style.container}>
                {/* to control in Control StatusBar */}
                <Image
                    style={style.splashIcon}
                // source={require('../assets/splash.png')}
                />
                <ActivityIndicator size="large" color="#fff" style={{ marginTop: 30 }} />
                {this.goToHomeScreen()}
            </View>
        )
    }
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
    }
})