import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather'
import { TextInput } from 'react-native-paper';
import Button from './Button';
import { PEOPLE } from '../data';
import Alert from './Alert';


const Login = ({ navigation }: { navigation: any }) => {
    const [showAlert, setShowAlert] = useState(false); // Added state for showing alert
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    const handleSignUpPress = () => {
        navigation.navigate('SignUp');
    };
    const handleLoginButtonPress = () => {
        const user = PEOPLE.find(person => person.email === name && person.password === password);
        if (user) {
            navigation.navigate('AppNavigator',{user});// Pass user information to AppNavigator
        } else {
            setShowAlert(true);
        }
    };
    const handleTryAgainPress = () => {
        setShowAlert(false); 
        setName(""); 
        setPassword("");
    };

    const handleBackPress = () => {
        navigation.goBack();
    }
    return (

        <SafeAreaView style={styles.Container}>
             {showAlert && (
                <Alert
                    title='Oh no...'
                    description='The email or password you entered is wrong.'
                    onPress={handleTryAgainPress}
                    ButtonTitle='Try again'
                />
            )}

            <TouchableOpacity onPress={handleBackPress}>
                <Icon name='angle-left' size={35} color={'black'} style={{ padding: 20 }} />
            </TouchableOpacity>
            <Text style={styles.topic}>Login</Text>
            <TextInput
                label="Email"
                value={name}
                onChangeText={name => setName(name)}
                mode='flat'
                outlineColor='black'
                activeOutlineColor='black'
                underlineColor='white'
                activeUnderlineColor='black'
                cursorColor='black'
                textColor='black'
                style={{ elevation: 5, height: 64, width: 350, alignSelf: 'center', backgroundColor: 'white', marginVertical: 10 }}
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={password => setPassword(password)}
                mode='flat'
                outlineColor='black'
                activeOutlineColor='black'
                underlineColor='white'
                activeUnderlineColor='black'
                cursorColor='black'
                textColor='black'
                style={{ elevation: 5, height: 64, width: 350, alignSelf: 'center', backgroundColor: 'white', marginVertical: 10, fontFamily: 'Lato-Regular', }}

            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'flex-end' }}>
                <Text style={styles.forgot}>Forgot Your Password?</Text>
                <Icon1 name='arrow-right' size={20} color={'black'} style={{ paddingEnd: 20 }} />
            </View>
            <Button onPress={handleLoginButtonPress} title='Login' />
            <Text style={{ fontFamily: 'Lato-Regular', color: 'grey', marginLeft: 30, marginTop: 10 }}>
                Don't Have an account?{' '}
                <TouchableOpacity onPress={handleSignUpPress} >
                    <Text style={{ fontFamily: 'Lato-Black', color: 'black', }}>Sign Up</Text>
                </TouchableOpacity>
                .
            </Text>



            <View style={styles.socialContainer}>
                <Text style={styles.socialTopic}>Or login with social account</Text>
                <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                    <Icon name='google' size={35} color={'black'} style={{ paddingEnd: 20 }} />
                    <Icon name='facebook' size={35} color={'black'} style={{ paddingEnd: 20 }} />
                    <Icon name='instagram' size={35} color={'black'} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#FBFBFB',
        flex: 1
    },
    topic: {
        fontSize: 30,

        color: 'black',
        padding: 20,
        fontFamily: 'Lato-Bold',
    },
    forgot: {
        textAlign: 'right',
        paddingRight: 10,
        color: 'grey',
        fontFamily: 'Lato-Regular',
    },
    socialContainer: {
        marginTop: 200,
        alignItems: 'center'
    },
    socialTopic: {
        color: 'black',


    }
});

export default Login;


