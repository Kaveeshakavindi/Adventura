import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



const PersonDetails = ({ route }: { route: any }) => {
    const { user } = route.params; // Access user information

    return(
        <View>
            <Text>Name: {user.name}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Phone Number: {user.phone}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default PersonDetails