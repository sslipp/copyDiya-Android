import React, { useCallback, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../component/Header';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Time from '../component/Time';
import Modal from '../component/Modal';
import * as ImagePicker from 'expo-image-picker';
import Slide from '../component/Slide';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'ukrainebold': require('../assets/fonts/ukrainebold.otf'),
    'ukraineregular': require('../assets/fonts/ukraineregular.otf'),
    'ukrainelight': require('../assets/fonts/ukrainelight.otf'),
  });

  const [Fam, SetFam] = useState('Дія');
  const [Name, SetName] = useState('Надія');
  const [Otch, SetOtch] = useState('Володимирівна');
  const [Date, SetDate] = useState('24.08.1991');
  const [gender, Setgender] = useState('М');
  const [bgCol, SetBgCol] = useState('#97bdee');
  const [bgCol1, SetBgCol1] = useState('#efe3ed');
  const [bgCol2, SetBgCol2] = useState('#FEF495');
  const [bgCol3, SetBgCol3] = useState('#EAF6E8');
  const [visibleElement, SetVisibleElement] = useState(true);
  const [visibleElement2, SetVisibleElement2] = useState(true);
  const [visibleElement3, SetVisibleElement3] = useState(true);
  const [QrCode, setQrCode] = useState(true);
  const [BarCode, setBarCode] = useState(false);
  const [QrCodeTwo, setQrCodeTwo] = useState(true);
  const [BarCodeTwo, setBarCodeTwo] = useState(false);

  const reFam = (Fam, Name, Otch, Date, gender) => {
    SetFam(Fam),
      SetName(Name),
      SetOtch(Otch),
      SetDate(Date),
      Setgender(gender)
  }

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: bgCol }} onLayout={onLayoutRootView}>
      <Header />
      <Slide Fam={Fam} Name={Name} Otch={Otch} Date={Date} gender={gender} image={image} pickImage={pickImage} SetBgCol={SetBgCol} bgCol1={bgCol1} SetBgCol1={SetBgCol1} bgCol2={bgCol2} SetBgCol2={SetBgCol2} bgCol3={bgCol3} SetBgCol3={SetBgCol3} visibleElement={visibleElement} SetVisibleElement={SetVisibleElement} visibleElement2={visibleElement2} SetVisibleElement2={SetVisibleElement2} visibleElement3={visibleElement3} SetVisibleElement3={SetVisibleElement3}
        QrCode={QrCode} setQrCode={setQrCode} BarCode={BarCode} setBarCode={setBarCode} QrCodeTwo={QrCodeTwo} setQrCodeTwo={setQrCodeTwo} BarCodeTwo={BarCodeTwo} setBarCodeTwo={setBarCodeTwo}
      />
      <Modal reFam={reFam} pickImage={pickImage} image={image} />
      <Time />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
