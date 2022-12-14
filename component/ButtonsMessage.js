import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';
import { useNavigation } from '@react-navigation/core';

export default function ButtonsMessage() {

    const navigation = useNavigation()

    const repl2 = () => {
        navigation.replace("Home")
    }

    return (
        <View>
            <View style={styles.buttons}>
                <TouchableOpacity activeOpacity={1}>
                    <Image style={styles.poslugy} source={require('./../assets/poslugy.png')} />
                    <Text style={styles.textP}>Послуги</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}>
                    <Image style={styles.message} source={require('./../assets/messageu.png')} />
                    <Text style={styles.textM}>Повідомлення</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={repl2}>
                    <Image style={styles.settings} source={require('./../assets/documents.png')} />
                    <Text style={styles.textD}>Документи</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}>
                    <Image style={styles.menu} source={require('./../assets/menu.png')} />
                    <Text style={styles.textN}>Меню</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imagess: {
        width: 100,
        height: 130,
        marginBottom: 10,
        borderColor: '#cddcf1',
        borderWidth: 2
    },
    textLogo: {
        position: 'absolute',
        bottom: 75,
        fontFamily: 'ukraineregular',
        fontSize: 19,
        left: -120
    },
    image: {
        marginTop: -117,
        marginLeft: -181,
        width: 50,
        height: 50,
        position: 'absolute'
    },
    image2: {
        marginTop: -106,
        marginLeft: 141,
        width: 42,
        height: 30,
        position: 'absolute'
    },
    buttons: {
        bottom: verticalScale(90)
    },
    buttons2: {
        top: 24,
        right: 147
    },
    menu: {
        left: horizontalScale(310),
        top: 46,
        width: 32,
        height: 23,
        position: 'absolute'
    },
    textN: {
        fontFamily: 'ukraineregular',
        top: 74,
        fontSize: 10,
        left: horizontalScale(308)
    },
    settings: {
        width: horizontalScale(33),
        height: 33,
        top: 53,
        left: horizontalScale(30),
        position: 'absolute'
    },
    textD: {
        fontFamily: 'ukraineregular',
        fontSize: 10,
        top: 86,
        left: horizontalScale(18)
    },
    poslugy: {
        left: horizontalScale(119),
        top: 84,
        width: horizontalScale(35),
        height: verticalScale(33),
        position: 'absolute'
    },
    textP: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(10),
        top: 117,
        left: horizontalScale(112)
    },
    message: {
        left: horizontalScale(220),
        top: 71,
        width: 31,
        height: 32.5,
        position: 'absolute'
    },
    textM: {
        fontFamily: 'ukraineregular',
        top: 103,
        fontSize: moderateScale(10),
        left: horizontalScale(193)
    },
    settingsText: {
        fontFamily: 'ukraineregular',
        padding: 10,
        fontSize: 15
    },
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
    },
    textSettings: {
        marginLeft: 11,
        fontFamily: 'ukraineregular',
        fontSize: 10
    },
    textSettingss: {
        marginLeft: 11,
        marginTop: 5,
        fontFamily: 'ukraineregular',
        fontSize: 10
    },
    menu2: {
        left: 316,
        top: 94,
        width: 35,
        height: 23,
        position: 'absolute'
    },
    textN2: {
        fontFamily: 'ukraineregular',
        top: 120,
        fontSize: 10,
        left: 316
    },
    settings2: {
        width: 35,
        height: 30,
        top: 102,
        left: 35,
        position: 'absolute'
    },
    textD2: {
        fontFamily: 'ukraineregular',
        fontSize: 10,
        top: 132,
        left: 24
    },
    poslugy2: {
        left: 124,
        top: 130,
        width: 40,
        height: 33,
        position: 'absolute'
    },
    textP2: {
        fontFamily: 'ukraineregular',
        fontSize: 10,
        top: 163,
        left: 119
    },
    message2: {
        left: 226,
        top: 118,
        width: 32,
        height: 32,
        position: 'absolute'
    },
    textM2: {
        fontFamily: 'ukraineregular',
        top: 150,
        fontSize: 10,
        left: 199
    },
});
