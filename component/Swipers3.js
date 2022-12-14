import React, { useState, Component } from 'react';
import { Vibration, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, Animated, AppRegistry, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';

export default class Swipers3 extends Component {
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
                tension: 10
            }).start();
        } else {
            Animated.spring(this.animatedValue, {
                toValue: 180,
                friction: 8,
                tension: 10
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
                <Animated.View style={[frontAnimatedStyle, { opacity: this.frontOpacity }]}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.flipCard()} style={[styles.card4, { backgroundColor: this.props.bgCol3 }]} >
                        <Text></Text>
                        <View>
                            <Text style={styles.textDocument4}>Внутрішній</Text><Text style={styles.textDocument5}>COVID19-сертифікат</Text>
                        </View>
                        <View style={styles.textCardData44}>
                            <Text style={styles.textCardDataText}>Дата</Text>
                            <Text style={styles.textCardDataText}>народження:</Text>
                            <Text style={styles.textCardDataText}>{this.props.Date}</Text>
                        </View>
                        <Text />
                        <View style={styles.textCardNumber33}>
                            <Text style={styles.textCardNumberText}>Дійсний до:</Text>
                            <Text style={styles.textCardNumberText}>24.06.2023</Text>
                        </View>
                        <View style={styles.textCardNumber22}>
                            <Text style={styles.textCardNumberText}>Номер</Text>
                            <Text style={styles.textCardNumberText}>сертифікату:</Text>
                            <Text style={styles.textCardNumberText}>URN:UVCI:01:UA:0</Text>
                            <Text style={styles.textCardNumberText}>E556693061955589</Text>
                            <Text style={styles.textCardNumberText}>E2520C4F3889304</Text>
                        </View>
                        <View>
                            {<Image style={styles.image} /> && <Image source={{ uri: this.props.image }} style={styles.image} />}
                        </View>
                        <LinearGradient colors={['#FFFFFF00', '#FFFFFF']}></LinearGradient>
                        {this.props.visibleElement3 &&
                            <View style={styles.CardLine33}>
                            </View>
                        }
                        <View>
                            <View style={styles.Name}>
                                <Text style={styles.textName}>{this.props.Fam}</Text>
                                <Text style={styles.textName}>{this.props.Name}</Text>
                                <Text style={styles.textName}>{this.props.Otch}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[styles.cardBack, backAnimatedStyle, { opacity: this.backOpacity }]}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.flipCard()} style={[styles.card4, { backgroundColor: this.props.bgCol3 }]} >
                        <View>
                            {this.props.QrCode &&
                                <View>
                                    <Text style={styles.textQR}>QR-КОД ДІЯТИМЕ 3 ХВ</Text>
                                    <Image style={styles.imageQRCode} source={require('./../assets/qrcodeCard.png')} />
                                    <TouchableOpacity activeOpacity={1}>
                                        <Image style={styles.qrCodeBtn} source={require('./../assets/qrCodeBtn.png')} />
                                        <Text style={styles.qrCodeText}>QR-код</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={1} onPress={() => {
                                        this.props.setQrCode(false)
                                        this.props.setBarCode(true)
                                    }}>
                                        <Image style={styles.barCodeBtn} source={require('./../assets/barCodeBtn.png')} />
                                        <Text style={styles.barCodeText}>Штрихкод</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                        </View>
                        <View>
                            {this.props.BarCode &&
                                <View>
                                    <Text style={styles.textBareCodeReplace}></Text>
                                    <Text style={styles.textBareCode}>ШТРИХКОД ДІЯТИМЕ 3 ХВ</Text>
                                    <Image style={styles.imageBarCode} source={require('./../assets/barcode.png')} />
                                    <Text style={styles.barCodeTxt}>1234567890123</Text>
                                    <TouchableOpacity activeOpacity={1} onPress={() => {
                                        this.props.setQrCode(true)
                                        this.props.setBarCode(false)
                                    }}>
                                        <Image style={styles.qrCodeBtnTwo} source={require('./../assets/qrCodeBtnTwo.png')} />
                                        <Text style={styles.qrCodeTextTwo}>QR-код</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={1}>
                                        <Image style={styles.barCodeBtnTwo} source={require('./../assets/barCodeBtnTwo.png')} />
                                        <Text style={styles.barCodeTextTwo}>Штрихкод</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                        </View>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textCardNumberText22: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(12)
    },
    qrCodeBtnTwo: {
        position: 'absolute',
        width: horizontalScale(63),
        height: verticalScale(63),
        marginLeft: horizontalScale(63),
        marginTop: verticalScale(328)
    },
    barCodeBtnTwo: {
        position: 'absolute',
        width: horizontalScale(53),
        height: verticalScale(53),
        marginLeft: horizontalScale(180),
        marginTop: verticalScale(335)
    },
    barCodeTextTwo: {
        position: 'absolute',
        marginTop: verticalScale(392),
        marginLeft: horizontalScale(168),
        fontSize: 13,
        fontFamily: 'ukraineregular'
    },
    qrCodeTextTwo: {
        position: 'absolute',
        marginTop: verticalScale(392),
        marginLeft: horizontalScale(70.5),
        fontSize: 13,
        fontFamily: 'ukraineregular'
    },
    barCodeTxt: {
        position: 'absolute',
        marginTop: verticalScale(240),
        fontSize: moderateScale(15),
        marginLeft: horizontalScale(95),
        fontFamily: 'ukraineregular'
    },
    textBareCodeReplace: {
        color: '#888',
        fontSize: 10,
        fontFamily: 'ukrainelight',
        marginTop: verticalScale(28),
        marginLeft: horizontalScale(37)
    },
    textBareCode: {
        color: '#888',
        fontSize: 10,
        position: 'absolute',
        fontFamily: 'ukrainelight',
        marginTop: verticalScale(100),
        marginLeft: horizontalScale(28)
    },
    imageBarCode: {
        position: 'absolute',
        width: horizontalScale(300),
        height: verticalScale(100),
        marginLeft: horizontalScale(12.5),
        marginTop: verticalScale(130)
    },
    barCodeText: {
        position: 'absolute',
        marginTop: verticalScale(390),
        marginLeft: horizontalScale(168),
        fontSize: 13,
        fontFamily: 'ukraineregular'
    },
    qrCodeText: {
        position: 'absolute',
        marginTop: verticalScale(390),
        marginLeft: horizontalScale(70.5),
        fontSize: 13,
        fontFamily: 'ukraineregular'
    },
    imageQRCode: {
        position: 'absolute',
        width: horizontalScale(300),
        height: verticalScale(300),
        marginLeft: horizontalScale(11),
        marginTop: verticalScale(45)
    },
    qrCodeBtn: {
        position: 'absolute',
        width: horizontalScale(63),
        height: verticalScale(63),
        marginLeft: horizontalScale(65),
        marginTop: verticalScale(325)
    },
    barCodeBtn: {
        position: 'absolute',
        width: horizontalScale(53),
        height: verticalScale(53),
        marginLeft: horizontalScale(180),
        marginTop: verticalScale(335)
    },
    textQR: {
        color: '#888',
        fontSize: 10,
        fontFamily: 'ukrainelight',
        marginTop: verticalScale(30),
        marginLeft: horizontalScale(37)
    },
    CardLine33: {
        borderBottomColor: '#ceebbf',
        borderBottomWidth: 2,
        width: horizontalScale(290),
        bottom: verticalScale(55),
        marginLeft: horizontalScale(15),
        borderRadius: 20
    },
    copyText: {
        position: 'absolute',
        top: verticalScale(253),
        left: horizontalScale(205),
        width: horizontalScale(33),
        height: verticalScale(33)
    },
    podatki: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(22),
        marginLeft: horizontalScale(10)
    },
    textKarta: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(22),
        marginLeft: horizontalScale(10),
        marginTop: verticalScale(10)
    },
    wrapper: {},
    modals: {
        backgroundColor: 'white',
        flex: 1,
    },
    cardPlatnik: {
        backgroundColor: '#efe3ed',
        width: horizontalScale(330),
        height: verticalScale(500),
        borderRadius: 10,
        marginLeft: horizontalScale(24),
        marginTop: verticalScale(50),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.15,
        shadowRadius: 7.49,
        elevation: 15,
    },
    card: {
        backgroundColor: '#fef495',
        width: horizontalScale(330),
        height: verticalScale(500),
        borderRadius: 10,
        marginLeft: horizontalScale(24),
        marginTop: verticalScale(50),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.15,
        shadowRadius: 7.49,
        elevation: 15,
    },
    card4: {
        width: horizontalScale(320),
        height: verticalScale(480),
        borderRadius: 10,
        marginLeft: horizontalScale(4),
        marginTop: verticalScale(70),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.15,
        shadowRadius: 7.49,
        elevation: 15,
    },
    cardBack: {
        position: 'absolute'
    },
    image: {
        marginTop: verticalScale(-12),
        marginBottom: verticalScale(10),
        width: horizontalScale(135),
        height: verticalScale(190),
        left: horizontalScale(21),
        bottom: verticalScale(90),
        borderColor: '#dbedd3',
        borderWidth: 2,
    },
    image2: {
        marginTop: verticalScale(-20),
        marginBottom: verticalScale(10),
        width: horizontalScale(145),
        height: verticalScale(220),
        left: horizontalScale(21),
        bottom: verticalScale(90),
        borderColor: '#b1c5e6',
        borderWidth: 2,
    },
    textDocument: {
        marginTop: verticalScale(5),
        marginBottom: verticalScale(28),
        marginLeft: horizontalScale(20),
        fontSize: moderateScale(20),
        fontFamily: 'ukraineregular',
    },
    textDocument4: {
        marginTop: verticalScale(5),
        marginBottom: verticalScale(13),
        marginLeft: horizontalScale(20),
        fontSize: moderateScale(18),
        fontFamily: 'ukraineregular',
    },
    textDocument5: {
        marginTop: verticalScale(-15),
        marginBottom: verticalScale(16),
        marginLeft: horizontalScale(20),
        fontSize: moderateScale(18),
        fontFamily: 'ukraineregular',
    },
    textCardLine: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(12),
        top: verticalScale(-3)
    },
    gradient: {
        padding: verticalScale(18)
    },
    CardLine: {
        width: horizontalScale(330),
        height: verticalScale(25),
        bottom: verticalScale(60),
    },
    textCardLine2: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(12)
    },
    gradient2: {
        padding: verticalScale(15)
    },
    CardLine2: {
        width: horizontalScale(330),
        height: verticalScale(25),
        marginTop: verticalScale(360),
        position: 'absolute'
    },
    textCardData: {
        top: verticalScale(-5),
        left: horizontalScale(180),
    },
    textCardData333: {
        top: verticalScale(20),
        left: horizontalScale(185),
    },
    textCardData44: {
        top: verticalScale(7),
        left: horizontalScale(176),
    },
    textCardDataText: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(12)
    },
    textCardDataText2: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(11),
        top: verticalScale(100),
        right: horizontalScale(171)
    },
    marqText: {
        bottom: verticalScale(24)
    },
    marqText2: {
        bottom: verticalScale(24)
    },
    textCardNumber: {
        top: verticalScale(-15),
        marginLeft: horizontalScale(180)
    },
    textCardNumber333: {
        top: verticalScale(5),
        left: horizontalScale(185),
    },
    textCardNumber33: {
        bottom: verticalScale(10),
        left: horizontalScale(176)
    },
    textCardNumber22: {
        top: verticalScale(210),
        left: horizontalScale(176),
        position: 'absolute'
    },
    textCardNumberText: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(11)
    },
    textCardNumberText2: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(13),
        right: horizontalScale(173),
        bottom: verticalScale(85)
    },
    Name: {
        marginTop: verticalScale(-35),
    },
    Namesss: {
        marginTop: verticalScale(-35),
    },
    Namess: {
        marginTop: verticalScale(-25)
    },
    textName: {
        marginTop: verticalScale(-3),
        top: verticalScale(5),
        marginLeft: horizontalScale(20),
        fontSize: moderateScale(20),
        fontFamily: 'ukraineregular',
    },
    textName2: {
        top: verticalScale(290),
        marginTop: -30,
        marginLeft: horizontalScale(15),
        fontSize: moderateScale(30),
        fontFamily: 'ukraineregular',
    },
    textName3: {
        padding: 1,
        marginTop: verticalScale(-5),
        top: verticalScale(100),
        marginLeft: horizontalScale(12),
        fontSize: moderateScale(16),
        fontFamily: 'ukraineregular',
    },
    kaska: {
        fontSize: moderateScale(28),
        position: 'absolute',
        left: horizontalScale(150),
        top: verticalScale(3)
    },
    titleModal: {
        textAlign: 'center',
        fontSize: moderateScale(25),
        paddingTop: verticalScale(30),
        fontFamily: 'ukraineregular'
    },
    settings: {
        width: horizontalScale(45),
        height: verticalScale(45),
        position: 'absolute',
        left: horizontalScale(275),
        top: -35
    },
    textN: {
        fontFamily: 'ukraineregular',
        top: verticalScale(103),
        fontSize: moderateScale(10),
        left: horizontalScale(310)
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    text: {
        color: '#fff',
        fontSize: moderateScale(30),
        fontWeight: 'bold'
    }
})