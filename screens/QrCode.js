import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Clipboard from 'expo-clipboard';
import { useNavigation } from '@react-navigation/core';

export default function QrCode() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const navigation = useNavigation()

  const repl = () => {
    navigation.replace("Home")
  }

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(
      'QR Code:',
      `${data}`,
      [
        {
          text: 'Ok', onPress: () => {
            setScanned(false);
          }
        },
        {
          text: 'Скопировать',
          onPress: () => {
            Clipboard.setStringAsync(`${data}`);
            setScanned(false);
          }
        },
      ],
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <Image style={styles.imageScan} source={require('../assets/scan.png')} />
      <TouchableOpacity activeOpacity={1} onPress={repl}>
        <Image style={styles.imageStrelka} source={require('../assets/strelka.png')} />
      </TouchableOpacity>
      <Text style={styles.textQrCode}>Сканування QR-коду</Text>
      <View>
        <Text style={styles.textQrCodeTwo}>Наведіть на рамку на QR-код, який хочете відсканувати.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textQrCode: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 550,
    fontSize: 17,
    fontFamily: 'ukraineregular'
  },
  imageStrelka: {
    width: 38,
    height: 38,
    marginLeft: 20,
    marginTop: -9,
    position: 'absolute',
  },
  textQrCodeTwo: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
    marginTop: -530,
    marginLeft: 40,
    fontFamily: 'ukraineregular',
    position: 'absolute'
  },
  imageScan: {
    width: 300,
    height: 400,
    marginLeft: 40,
    position: 'absolute',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  imageRec: {
    width: 80,
    height: 80,
    marginLeft: 145,
    marginTop: 550
  },
});
