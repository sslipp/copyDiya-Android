import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, Animated, AppRegistry, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MarqueeText from 'react-native-marquee';
import Modal from './Modal';
import Name from './Name';
import CardFront from './CardFront';

export default class Flip extends Component {

    UNSAFE_componentWillMount() {
        this.animatedValue = new Animated.Value(0);
        this.value = 0;
        this.animatedValue.addListener(({ value }) => {
            this.value = value;
        })
        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
        })
        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        })
        this.frontOpacity = this.animatedValue.interpolate({
            inputRange: [89, 90],
            outputRange: [1, 0]
        })
        this.backOpacity = this.animatedValue.interpolate({
            inputRange: [89, 90],
            outputRange: [0, 1]
        })
    }

    flipCard() {
        if (this.value >= 90) {
            Animated.spring(this.animatedValue, {
                toValue: 0,
                friction: 8,
                tension: 10,
                useNativeDriver: true
            }).start();
        } else {
            Animated.spring(this.animatedValue, {
                toValue: 180,
                friction: 8,
                tension: 10,
                useNativeDriver: true
            }).start();
        }

    }

    render() {
        const frontAnimatedStyle = {
            transform: [
                { rotateY: this.frontInterpolate }
            ]
        }
        const backAnimatedStyle = {
            transform: [
                { rotateY: this.backInterpolate }
            ]
        }

        return (
            <View>
                <View style={styles.containerFront}>
                    {/* <TouchableOpacity activeOpacity={1} onPress={() => this.flipCard()}> */}
                        <Animated.View style={[frontAnimatedStyle, { opacity: this.frontOpacity }]}>
                            <CardFront />
                        </Animated.View>
                        <Animated.View style={[styles.cardBack, backAnimatedStyle, { opacity: this.backOpacity }]}>
                            <View>
                                <Image style={styles.imageQRCode} source={require('./../assets/qrcodeCard.png')} />
                            </View>
                        </Animated.View>
                    {/* </TouchableOpacity> */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    modals: {
        backgroundColor: 'white',
        flex: 1,

    },
    imageQRCode: {
        position: 'absolute',
        width: 300,
        height: 300,
        right: 4,
        top: 80
    },
    card: {
        backgroundColor: '#fef495',
        width: 310,
        height: 440,
        borderRadius: 10,
        left: 27,
        top: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    cardBack: {
        position: 'absolute',
        backgroundColor: '#fef495',
        width: 310,
        height: 440,
        borderRadius: 10,
        left: 27,
        top: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    image: {
        marginTop: 10,
        width: 150,
        height: 200,
        left: 20,
        bottom: 90
    },
    textDocument: {
        marginTop: 15,
        marginLeft: 20,
        fontSize: 25,
        fontFamily: 'ukraineregular',
    },
    textCardLine: {
        padding: 9,
        fontFamily: 'ukraineregular',
        bottom: 5,
        fontSize: 12
    },
    CardLine: {
        width: 310,
        height: 25,
        bottom: 70
    },
    textCardData: {
        top: 20,
        left: 185,
    },
    textCardDataText: {
        fontFamily: 'ukraineregular',
    },
    textCardNumber: {
        top: 25,
        left: 185
    },
    textCardNumberText: {
        fontFamily: 'ukraineregular',
    },
    Name: {
        marginTop: -55
    },
    textName: {
        marginTop: -3,
        top: 5,
        marginLeft: 20,
        fontSize: 20,
        fontFamily: 'ukraineregular',
    },
    kaska: {
        fontSize: 33,
        position: 'absolute',
        left: 180,
        top: 13
    },
    titleModal: {
        textAlign: 'center',
        fontSize: 25,
        paddingTop: 30,
        fontFamily: 'ukraineregular'
    },
});

AppRegistry.registerComponent('animatedbasic', () => animatedbasic);