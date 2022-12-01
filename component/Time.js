import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';

export default function Time() {
    function addLeadingZero(d) {
        return (d < 10) ? '0' + d : d;
    }

    function getUserTime(t = new Date()) {

        let Y = t.getFullYear();
        let M = addLeadingZero(t.getMonth() + 1);
        let D = addLeadingZero(t.getDate());    
        let h = addLeadingZero(t.getHours());
        let m = addLeadingZero(t.getMinutes());


        return `${D}.${M}.${Y} о ${h}:${m}`;
    }
    return (
        <View style={styles.times}>
            <View style={styles.textPodCards}>
                <Text style={styles.textPodCard}>Дані оновлено {getUserTime(new Date())}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textPodCard: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(11),
        bottom: verticalScale(105),
        left: horizontalScale(75),
        position: 'absolute'
    }
});
