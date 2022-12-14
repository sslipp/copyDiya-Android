import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';

export default function Header() {
    return (
        <View>
            <View>
                <Image source={require('./../assets/icon.png')} style={styles.image} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        marginTop: verticalScale(70),
        marginLeft: horizontalScale(115),
        width: 150,
        height: 150,
        position: 'absolute'
    },
});
