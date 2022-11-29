import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Time() {
    function addLeadingZero(d) {
        return (d < 10) ? '0' + d : d;
    }

    const days = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];

    function getUserTime(t = new Date()) {

        let Y = t.getFullYear();
        let D = addLeadingZero(t.getDate());
        let d = days[t.getMonth()];
        let h = addLeadingZero(t.getHours());
        let m = addLeadingZero(t.getMinutes());


        return `${D} ${d} ${Y} о ${h}:${m}`;
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
        fontSize: 11,
        bottom: 95,
        left: 65,
        position: 'absolute'
    }
});
