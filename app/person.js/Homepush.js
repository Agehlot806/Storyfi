Appsa
import React, { useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, BackHandler, Alert, Text, ScrollView, Animated, Easing, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Homecopment from '../../Compoent/HomeCompoent';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Daycompoent from '../../Compoent/Daycompoent'
import image from '../../assets';
import { LottieView } from 'lottie-react-native';
import Dealiycheck from '../../Compoent/Dealiycheck';
import Inspirationcompent from '../../Compoent/Inspirationcompent'
import PushNotification, { PushNotificationObject } from "react-native-push-notification";
import { useFocusEffect } from '@react-navigation/native'
const Setting = ({ navigation }) => {
    const [ajaxRequesting, setAjaxRequesting] = useState(false);
    useEffect(() => {
        NewPushNotfication();
    }, []);
    const NewPushNotfication = async () => {
        // function toTimestamp(strDate) {
        //     var datum = Date.parse(strDate);
        //     return datum / 1000;
        // }
        const dated = toTimestamp('3:40 PM');
        const jsonValue = await AsyncStorage.getItem("IdA",)
        console.log("Id>>>>", jsonValue)
        // const dated = toTimestamp(new Date(Date.now() + SPPP));
        // var now = new Date();
        // now.setDate(now.getDate() + 1)
        // now.setHours(1);
        // now.setMinutes(2);
        // now.setMilliseconds(2);
        // var date, TimeType, hour, minutes, seconds, fullTime;
        // date = new Date();
        // minutes = date.toTimestamp('12:17 PM');
        PushNotification.createChannel(
            {
                channelId: "specialid",
                channelName: "Special messasge",
                channelDescription: "Notification for DeAddictify App",
                // playSound: false,
            },
            (created) => console.log(`createChannel returned '${created}'`)
        );
        PushNotification.localNotification({
            id: 13,
            channelId: 'specialid',
            title: 'DeAddictify',
            channelDescription: "Notification DeAddictify",
            message: ' Notification' + new Date(Date.now() + 60 * 1000 * 1, repeatType = 'time',
                repeatType = 'time',
                repeatTime = (1) * 10000),
            // date: new Date(Date.now() + 60 * 1000 * 60, repeatType = 'time',
            //     repeatType = 'time',
            //     repeatTime = (100) * 86400000),
            // importance:Importance.HIGH ,
            //  repeatTime:dated,
            // date: minutes, 
            // date: '11:00',
            // date: new Date(dated),// in 60 secs
            // repeatTime: true,
            // repeatType: "day",
            // allowWhileIdle: true,
            // repeatType: 'minute',
            // date: minutes,
            vibration: 300,
            soundName:
                Platform.OS === 'android'
                    ? 'android.resource://com.ascendapp/raw/ding'
                    : 'ding.wav',
            allowWhileIdle: false,
            subtitle: "My Notification Subtitle",
            largeIconUrl: "https://upload.wikimedia.org/wikipedia/commons/3/37/No_drink_alcohol_520px.png",
            color: "blue",
            // ignoreInForeground: false,
            // groupSummary: false,
            // ignoreInForeground: false,
            // userInfo: { screen: 'Home' },
            // // sound: notificationSound,
            // allowWhileIdle: true,
            // invokeApp: true,
            // repeatTime: 1,
            // soundName: "default",
            // visibility: "private",
            actions: ["Yes", "No"],
            // // invokeApp: true,
            // priority: "high",
            // body: "Local notification!",
            // title: "Local Notification Title",
            // sound: "chime.aiff",
            // silent: true,
            // category: "SOME_CATEGORY",
            // userInfo: {},
            // fireDate: new Date()
        })
    }
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <Homecopment back2={true} name={"Home"} image3={image.setting} onpresss={() => navigation.navigate("Setting")} />
            <ScrollView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
                <Daycompoent />
                {/* <Dealiycheck /> */}
                <Inspirationcompent />
            </ScrollView>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    TouchableOpacitystyle: {
        height: moderateScale(150),
        backgroundColor: "white",
        // shadowColor: "white",
        justifyContent: "center",

    },
    contare1: {
        height: moderateScale(25), width: "50%", alignItems: "center", justifyContent: "center",
    },
    textstyle: {
        fontSize: scale(13), color: "black", fontWeight: '400'
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain'
    },
});
export default Setting;
