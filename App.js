import React, { useCallback, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './component/Header';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Time from './component/Time';
import Swipers from './component/Swipers';
import Modal from './component/Modal';
import * as ImagePicker from 'expo-image-picker';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'ukrainebold': require('./assets/fonts/ukrainebold.otf'),
    'ukraineregular': require('./assets/fonts/ukraineregular.otf'),
  });

  const [Fam, SetFam] = useState('Дія');
  const [Name, SetName] = useState('Надія');
  const [Otch, SetOtch] = useState('Володимирівна');
  const [Date, SetDate] = useState('24.08.1991');
  const [gender, Setgender] = useState('М');

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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground
        style={{ flex: 1 }}
        source={{ uri: 'https://i.imgur.com/9RJ6a7N.png', }}>
        <Header />
        <Swipers Fam={Fam} Name={Name} Otch={Otch} Date={Date} gender={gender} image={image} pickImage={pickImage}/>
        <Modal reFam={reFam} pickImage={pickImage} image={image}/>
        <Time />
      </ImageBackground >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card2: {
    position: 'absolute',
    top: 55,
    left: 320,
  },
});
