import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';

export default function Header() {

    return (
        <View>
            <View>
                <Image source={require('./../assets/icon.png')} style={styles.image} />
            </View>
            <TouchableOpacity activeOpacity={1}>
                <Image source={require('./../assets/qrcode.png')} style={styles.image2} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        marginTop: verticalScale(50),
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
