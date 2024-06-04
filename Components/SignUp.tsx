import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather'
import { TextInput } from 'react-native-paper';
import Button from './Button';

const SignUp = ({ navigation }: { navigation: any }) => {
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleBackPress = () => {
        navigation.goBack();
    }
    const handleSignUpButtonPress = () => {
        navigation.navigate('Home');
    }
    const handleLoginPress = () => {
        navigation.navigate('Login');
    };
    return (
        <SafeAreaView style={styles.Container}>
            <TouchableOpacity onPress={handleBackPress}>
                <Icon name='angle-left' size={35} color={'black'} style={{ padding: 20 }} />
            </TouchableOpacity>
            <Text style={styles.topic}>Sign Up</Text>
            <TextInput
                label="First Name"
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
                label="Last Name"
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
                right={<TextInput.Affix text="/100" />}
            />
            <TextInput
                label="Email"
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
          
            <Button onPress={handleSignUpButtonPress} title='Sign Up' />
            <Text style={{fontFamily:'Lato-Regular', color: 'grey', marginLeft: 30, marginTop: 10}}>
                Already Have an account?{' '}
                <TouchableOpacity onPress={handleLoginPress} >
                    <Text style={{fontFamily:'Lato-Black', color: 'black',}}>Login</Text>
                </TouchableOpacity>
                .
            </Text>
            <View style={styles.socialContainer}>
                <Text style={styles.socialTopic}>Or sign up with social account</Text>
                <View style={{ flexDirection: 'row', paddingTop:20}}>
                    <Icon name='google' size={35} color={'black'} style={{ paddingEnd: 20 }} />
                    <Icon name='facebook' size={35} color={'black'} style={{ paddingEnd: 20 }} />
                    <Icon name='instagram' size={35} color={'black'}  />
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
        marginTop: 60,
        alignItems: 'center'
    },
    socialTopic: {
        color: 'black',
      

    }
});

export default SignUp;
