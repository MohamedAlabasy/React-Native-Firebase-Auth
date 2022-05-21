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
    ActivityIndicator
} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function SignIn({ navigation }) {
    const [email, onChangeEmail] = React.useState('a@a.com');
    const [password, onChangePassword] = React.useState('123456');
    const [isLoader, setIsLoader] = React.useState('none');
    const [showText, setShowText] = React.useState('flex');
    const [isBtnDisabled, setIsBtnDisabled] = React.useState(false);
    React.useEffect(() => {
        setShowText('flex');
        setIsLoader('none');
        setIsBtnDisabled(false)
    }, []);
    return (
        <View style={style.container}>
            <View style={style.inputContainer}>
                <Image
                    style={style.image}
                    source={require('../Assets/Splash.png')}
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
                    disabled={isBtnDisabled}
                    onPress={() => {
                        setShowText('none');
                        setIsLoader('flex');
                        setIsBtnDisabled(true)
                        doLogin(email, password, navigation);
                    }}
                    style={style.btn}>
                    <Text style={[style.text, { display: showText }]}>Login</Text>
                    <ActivityIndicator style={{
                        position: 'absolute',
                        alignSelf: 'center',
                        display: isLoader,
                    }} size={'large'} color={'#fff'} />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text>Dan't have an Account </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ color: '#521900', fontWeight: 'bold' }}>Sing Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
function doLogin(user, pass, navigation) {
    auth().signInWithEmailAndPassword(user, pass).then(() => {
        navigation.replace('Home');
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
