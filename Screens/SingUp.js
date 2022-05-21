/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function SignUp({ navigation }) {
    const [email, onChangeEmail] = React.useState('nnasad@gmail.com');
    const [password, onChangePassword] = React.useState('123456');

    return (
        <View style={style.container}>
            <View style={style.inputContainer}>
                <Image
                    style={style.image}
                // source={require('../assets/mainImage.png')}
                />
                <TextInput
                    style={style.input}
                    value={email}
                    onChangeText={e => onChangeEmail(e)}
                    placeholder="Email"
                    keyboardType="email-address"
                />
                <TextInput
                    style={style.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </View>
            <View style={style.btnContainer}>
                <TouchableOpacity
                    onPress={() => {
                        doLogin(email, password, navigation);
                    }}
                    style={style.btn}>
                    <Text style={style.text}>Sign Up</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text>Dan't have an Account </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={{ color: '#521900', fontWeight: 'bold' }}>Sing in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
function doLogin(email, pass, navigation) {
    auth().createUserWithEmailAndPassword(email, pass).then(() => {
        navigation.navigate('Home');
    });
}

const style = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
    },
    input: {
        width: '90%',
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        paddingStart: 20,
        paddingEnd: 20,
        borderRadius: 10,
        borderColor: '#521900',
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 30,
    },
    btnContainer: {
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 30,
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
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
});
