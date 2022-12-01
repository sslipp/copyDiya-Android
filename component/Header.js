import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';

export default function Header() {
    return (
        <View>
            <View>
                <Image source={require('./../assets/icon.png')} style={styles.image}/>
            </View>
            <View>
                <Image source={require('./../assets/qrcode.png')} style={styles.image2}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
