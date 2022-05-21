/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Home({ navigation }) {
    const [isLoader, setIsLoader] = React.useState('none');
    const [showText, setShowText] = React.useState('flex');
    const [isBtnDisabled, setIsBtnDisabled] = React.useState(false);

    React.useEffect(() => {
        setShowText('flex');
        setIsLoader('none');
    }, []);

    return (
        <View style={style.container}>
            <TouchableOpacity
                disabled={isBtnDisabled}
                onPress={() => {
                    auth().signOut()
                        .then(() => {
                            setShowText('none');
                            setIsLoader('flex');
                            setIsBtnDisabled(true)
                            navigation.replace('SignIn');
                        });

                }}
                style={style.btn}>
                <Text style={[style.text, { display: showText }]}>logout</Text>
            </TouchableOpacity>
            <ActivityIndicator style={{
                position: 'absolute',
                display: isLoader,
            }} size={'large'} color={'#fff'} />
        </View >
    );
}

const style = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        backgroundColor: '#521900',
        borderRadius: 15,
        width: '90%',
        height: 50,
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',

    },
});
