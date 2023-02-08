import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, ImageBackground, Image, Button, TextInput, FlatList } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import image from '../assets';
import { useFocusEffect } from '@react-navigation/native';
const SplashScreen = ({ navigation }) => {
    const [name, setname] = useState('')
    const [name1, setname1] = useState('')
    const [date, setdate] = useState([])
    // useFocusEffect(
    //     React.useCallback(() => {
    //         setTimeout(() => {
    //             // navigation.navigate('Login')
    //             Alllogin()
    //         }, 800)
    //     },)
    // );
    // const Alllogin = async () => {
    //     const IdUser = await AsyncStorage.getItem('IdA')
    //     console.log(">>>Idd", IdUser)
    //     if (IdUser == null) {
    //         navigation.navigate('Login')

    //     } else {
    //         navigation.navigate("Bottomn")

    //     }
    // }
    return (
        <View style={{ flex: 1, }}>
            <ImageBackground style={{ flex: 1, width: "100%" }}
                source={image.splashscreen}>
            </ImageBackground>

        </View>
    );
}


export default SplashScreen;





