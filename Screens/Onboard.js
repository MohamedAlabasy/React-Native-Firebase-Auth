/* eslint-disable prettier/prettier */
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { StyleSheet, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Onboard extends React.Component {
    componentDidMount() {
        AsyncStorage.setItem('isFirstTime', 'yes')
    }
    render() {
        return (
            <Onboarding
                onSkip={() => this.goToHomeScreen()}
                onDone={() => this.goToHomeScreen()}
                bottomBarColor={'#fff'}
                controlStatusBar={false}
                pages={[
                    {
                        bottomBarHeight: 80,
                        backgroundColor: '#fff',
                        image: <Image style={style.image} source={require('../Assets/onboard1.png')} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image style={style.image} source={require('../Assets/onboard2.png')} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image style={style.image} source={require('../Assets/onboard3.png')} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    }
                ]}
            />
        )
    }
    goToHomeScreen() {
        this.props.navigation.replace("SignIn");
    }
}

const style = StyleSheet.create({
    image: {
        width: 250,
        height: 250,
        borderRadius: 25
    }
})