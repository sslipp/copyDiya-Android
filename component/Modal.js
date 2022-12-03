import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';
import Overlay from 'react-native-modal-overlay';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';

export default function Modal({ reFam, pickImage, image }) {

    const [modalVisible, SetModalVisible] = React.useState(false);
    const [Fam, onChangeFam] = React.useState('Дія');
    const [Name, onChangeName] = React.useState('Надія');
    const [Otche, onChangeOtche] = React.useState('Володимирівна');
    const [Date, onChangeDate] = React.useState('24.08.1991');
    const [gender, onChangegender] = React.useState('М');

    const onClose = () => SetModalVisible(false);
    const onOpen = () => SetModalVisible(true);

    return (
        <View>
            <Overlay visible={modalVisible} onClose={onClose} closeOnTouchOutside childrenWrapperStyle={{ backgroundColor: '#fff', borderRadius: 10 }} containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <Text style={styles.settingsText}>Налаштування</Text>
                {image && <Image source={{ uri: image }} style={styles.imagess} />}
                <View>
                    <Button title='Выбрать фото' style={styles.btns} onPress={pickImage} />
                    <Text style={styles.textSettingss}>Редактировать фамилию</Text>
                    <TextInput style={styles.input} onChangeText={onChangeFam} value={Fam} placeholder="Фамилия" />
                    <Text style={styles.textSettings}>Редактировать имя</Text>
                    <TextInput style={styles.input} onChangeText={onChangeName} value={Name} placeholder="Имя" />
                    <Text style={styles.textSettings}>Редактировать отчество</Text>
                    <TextInput style={styles.input} onChangeText={onChangeOtche} value={Otche} placeholder="Отчество" />
                    <Text style={styles.textSettings}>Редактировать год рождения</Text>
                    <TextInput style={styles.input} onChangeText={onChangeDate} value={Date} placeholder="Дата народження: 24.08.1991" />
                    <Text style={styles.textSettings}>Редактировать пол</Text>
                    <TextInput style={styles.input} onChangeText={onChangegender} value={gender} placeholder="Пол" />
                </View>
                <Button onPress={() => (reFam(Fam, Name, Otche, Date, gender))} title='Изменить' />
            </Overlay>
            <View style={styles.buttons}>
                <TouchableOpacity activeOpacity={1}>
                    <Image style={styles.poslugy} source={require('./../assets/poslugy.png')} />
                    <Text style={styles.textP}>Послуги</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}>
                    <Image style={styles.message} source={require('./../assets/messages.png')} />
                    <Text style={styles.textM}>Повідомлення</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}>
                    <Image style={styles.settings} source={require('./../assets/document.png')} />
                    <Text style={styles.textD}>Документи</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={onOpen}>
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
        top: 34,
        width: 35,
        height: 23,
        position: 'absolute'
    },
    textN: {
        fontFamily: 'ukraineregular',
        top: 63,
        fontSize: 10,
        left: horizontalScale(310)
    },
    settings: {
        width: horizontalScale(36),
        height: 33,
        top: 40,
        left: horizontalScale(30),
        position: 'absolute'
    },
    textD: {
        fontFamily: 'ukraineregular',
        fontSize: 10,
        top: 75,
        left: horizontalScale(18)
    },
    poslugy: {
        left: horizontalScale(119),
        top: 72,
        width: horizontalScale(40),
        height: verticalScale(33),
        position: 'absolute'
    },
    textP: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(10),
        top: 106,
        left: horizontalScale(113)
    },
    message: {
        left: horizontalScale(220),
        top: 58,
        width: 33,
        height: 32,
        position: 'absolute'
    },
    textM: {
        fontFamily: 'ukraineregular',
        top: 92,
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
