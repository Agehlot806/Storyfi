import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import {
    Button,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import image from '../assets';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { Image } from 'react-native';

const Backcompoent = ({title}) => {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={{ height: moderateScale(170), width: "100%", }} source={image.headerimage}>
                <View style={{ height: moderateScale(90), top: scale(25), width: "100%", flexDirection: "row", alignItems: "center" }}>
                    <View style={{ height: moderateScale(45), width: "13%", justifyContent: "center", alignItems: "center" }}>

                        <Image source={image.back}
                            style={{ height: 22, width: 22 }}
                        />

                    </View>
                    <View style={{ height: moderateScale(30), width: "55%", }}>

                        <Text style={{ fontSize: scale(18), color: "white", fontWeight: "500",textAlign:"center" }}>{title}
                        </Text>
                    </View>
                    <View style={{ height: moderateScale(45), width: "40%", alignItems: "center" }}>
                        <Image source={{ uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" }}

                            style={{ height: scale(38), width: scale(38), borderRadius: scale(40) }}
                        />

                    </View>
                </View>

            </ImageBackground>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: moderateScale(170),
        justifyContent: "center"
    },
    buttonsContainer: {
        padding: 10,
    },
    textStyle: {
        textAlign: 'center',
        marginBottom: 8,
    },
});

export default Backcompoent;