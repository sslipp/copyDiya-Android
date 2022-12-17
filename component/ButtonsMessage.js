import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';
import { useNavigation } from '@react-navigation/core';

export default function ButtonsMessage({ reFam, Fam, Name, Otche, Date, gender }) {

    const navigation = useNavigation()

    const repl2 = () => {
        navigation.navigate("Home")
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <TouchableOpacity activeOpacity={1}>
                    <Image style={styles.poslugy} source={require('./../assets/poslugy.png')} />
                    <Text style={styles.textP}>Послуги</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}>
                    <Image style={styles.message} source={require('./../assets/messages.png')} />
                    <Text style={styles.textM}>Повідомлення</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => {
                    repl2()
                    reFam(Fam, Name, Otche, Date, gender)
                }}>
                    <Image style={styles.settings} source={require('./../assets/documents.png')} />
                    <Text style={styles.textD}>Документи</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}>
                    <Image style={styles.menu} source={require('./../assets/menu.png')} />
                    <Image style={styles.menuTwo} source={require('./../assets/menu.png')} />
                    <Text style={styles.textN}>Меню</Text>
                </TouchableOpacity>
                <View style={styles.CardLine33}></View>
                <View style={styles.bg}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute'
    },
    CardLine33: {
        borderBottomColor: '#C7D9E5',
        borderBottomWidth: 2,
        width: horizontalScale(380),
        marginTop: verticalScale(4),
        marginLeft: horizontalScale(-5),
        borderRadius: 20
    },
    bg: {
        position: 'absolute',
        width: horizontalScale(400),
        marginLeft: horizontalScale(-10),
        height: verticalScale(95),
        marginTop: verticalScale(65),
        zIndex: -1,
        backgroundColor: '#DEE8F1'
    },
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
        bottom: verticalScale(90),
        marginTop: verticalScale(783.7),
        marginLeft: horizontalScale(5)
    },
    buttons2: {
        top: 24,
        right: 147
    },
    menu: {
        left: horizontalScale(310),
        top: verticalScale(46),
        width: 32,
        height: 23,
        position: 'absolute'
    },
    menuTwo: {
        left: horizontalScale(310),
        top: verticalScale(47.4),
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
        width: horizontalScale(34),
        height: 33,
        top: 54,
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
        top: 85,
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
        height: 32,
        position: 'absolute'
    },
    textM: {
        fontFamily: 'ukraineregular',
        top: 103,
        fontSize: moderateScale(10),
        left: horizontalScale(193)
    },
});
