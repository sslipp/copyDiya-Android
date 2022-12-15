import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';

export default function HeaderMessages({ Name }) {

    return (
        <View style={styles.container}>
            <View>
                <Image source={require('./../assets/icon.png')} style={styles.image} />
                <Text style={styles.textMessage}>Вітаємо,{"\n"}{Name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C8D8E7',
        paddingBottom: 20
    },
    textMessage: {
        fontFamily: 'ukraineregular',
        marginTop: verticalScale(42),
        marginLeft: horizontalScale(80),
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
