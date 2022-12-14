import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';
import { useNavigation } from '@react-navigation/core';

export default function Header() {

    const navigation = useNavigation()

    const repl = () => {
        navigation.replace("Code")
    }

    return (
        <View style={styles.container}>
            <View>
                <Image source={require('./../assets/icon.png')} style={styles.image} />
                <Text style={styles.textMessage}>Повідомлення</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C6D9E8',
        paddingBottom: 20
    },
    textMessage: {
        fontFamily: 'ukraineregular',
        marginTop: 48,
        marginLeft: 90,
        position: 'absolute',
        fontSize: 18
    },
    image: {
        marginTop: verticalScale(40),
        marginLeft: horizontalScale(25),
        width: 50,
        height: 50,
    },
    image2: {
        marginTop: -40,
        marginLeft: horizontalScale(327),
        width: 42,
        height: 30,
        position: 'absolute'
    }
});
