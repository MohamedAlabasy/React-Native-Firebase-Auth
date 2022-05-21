/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Home({ navigation }) {
    // const [initializing] = React.useState(true);
    // const [user] = React.useState();

    return (
        <View style={style.container}>
            <TouchableOpacity
                onPress={() => {
                    // navigation.navigate('SignIn');
                    auth()
                        .signOut()
                        .then(() => {
                            // alert('User signed out!')
                            navigation.navigate('SignIn');
                        });
                }}
                style={style.btn}>
                <Text style={style.text}>logout</Text>
            </TouchableOpacity>
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
