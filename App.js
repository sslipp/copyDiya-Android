import React, { useCallback, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import QrCode from './screens/QrCode';
import Message from './screens/Message';
import Messages from './screens/Messages';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import Menu from './screens/Menu';

const Tab = createBottomTabNavigator();

export default function App() {

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

  return (
    <NavigationContainer>
      <StatusBar style="auto" backgroundColor="transparent" translucent={true} />
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Home"
          children={() => <HomeScreen Fam={Fam} Name={Name} Otch={Otch} Date={Date} gender={gender} image={image} pickImage={pickImage} />}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Menu"
          children={() => <Menu reFam={reFam} pickImage={pickImage} image={image} NameTitle={Name} />}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
