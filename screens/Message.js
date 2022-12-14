import React, { useCallback, useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Header from '../component/HeaderMessage';
import ButtonsMessage from '../component/ButtonsMessage';
import { db } from '../firebase';
import { useNavigation } from '@react-navigation/core';
import { doc, getDoc } from 'firebase/firestore';
import { horizontalScale, moderateScale, verticalScale } from '../component/Metrics';

export default function Message() {

  const [userDoc, SetUserDoc] = useState(null)
  const navigation = useNavigation()

  const Read = () => {
    const myDoc = doc(db, "MyCollection", "MyDocument")

    getDoc(myDoc)
      .then((snapshot) => {
        if (snapshot.exists) {
          SetUserDoc(snapshot.data())
        } else {
          alert("No Doc Found")
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  useEffect(() => {
    Read()
  })

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.container}>
        {
          userDoc != null &&
          <TouchableOpacity style={styles.message} onPress={() => navigation.replace("Messages")}>
            <Text style={styles.textEmoji}>☝🏼</Text>
            <Text style={styles.textMessage}>Зверніть увагу</Text>
            <View style={styles.CardLine33}></View>
            <Text style={styles.textMessageTwo}>Нове оновлення. Подивіться</Text>
            <Text style={styles.textMessageThree}>{userDoc.date} / {userDoc.dateTime}</Text>
          </TouchableOpacity>
        }
      </View>
      <ButtonsMessage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAE6F2'
  },
  textEmoji: {
    position: 'absolute',
    marginTop: 7,
    marginLeft: 10,
    fontSize: 15
  },
  CardLine33: {
    borderBottomColor: '#C6D9E8',
    borderBottomWidth: 2,
    width: 352,
    marginLeft: -1,
    marginTop: 10,
    borderRadius: 20
  },
  textMessage: {
    fontFamily: 'ukraineregular',
    fontSize: 12,
    marginTop: 10,
    marginLeft: 35
  },
  textMessageTwo: {
    fontFamily: 'ukraineregular',
    fontSize: 14,
    marginTop: 11,
    marginLeft: 15
  },
  textMessageThree: {
    fontFamily: 'ukraineregular',
    fontSize: 13,
    marginTop: 5,
    color: '#C4C7CC',
    marginLeft: 15
  },
  message: {
    backgroundColor: '#fff',
    width: horizontalScale(350),
    height: verticalScale(100),
    borderRadius: 10,
    marginLeft: horizontalScale(13),
    marginTop: verticalScale(30)
  },
});
