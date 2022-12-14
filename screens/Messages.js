import React, { useCallback, useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { db } from '../firebase';
import { useNavigation } from '@react-navigation/core';
import { doc, getDoc } from 'firebase/firestore';

export default function Messages() {

  const [userDoc, SetUserDoc] = useState(null)
  const navigation = useNavigation()

  const Read = () => {
    const myDoc = doc(db, "Messages", "Message")

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
      <View style={styles.container}>
        {
          userDoc != null &&
          <View style={styles.message}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.replace("Message")}>
              <Image source={require('../assets/strelkaTwo.png')} style={styles.image} />
              <Text style={styles.undo}>Повернутись</Text>
            </TouchableOpacity>
            <Text style={styles.textEmoji}>☝🏼</Text>
            <Text style={styles.textMessage}>Оновлення {userDoc.version}</Text>
            <View style={styles.CardLine33}></View>
            <Text style={styles.textMessageTwo}>{userDoc.textMessage}</Text>
            <Text style={styles.textMessageThree}>{userDoc.date} / {userDoc.dateTime}</Text>
          </View>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAE6F2'
  },
  undo: {
    position: 'absolute',
    fontFamily: 'ukraineregular',
    fontSize: 20,
    marginTop: -45,
    marginLeft: 60
  },
  image: {
    position: 'absolute',
    width: 55,
    height: 55,
    marginTop: -60
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
    marginLeft: 5,
    textAlign: 'End'
  },
  textMessageThree: {
    fontFamily: 'ukraineregular',
    fontSize: 13,
    marginTop: 7,
    color: '#C4C7CC',
    marginLeft: 5
  },
  message: {
    backgroundColor: '#fff',
    width: 355,
    height: 580,
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 70
  },
});
