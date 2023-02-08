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

const Buttoncompoent = ({ onPress }) => {


    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <ImageBackground style={{ height: moderateScale(80), width: "100%", alignItems: "center", justifyContent: "center" }} source={image.buttonimage}>
                    <Text style={{ fontSize: scale(20), color: "#FFFFFF", bottom: scale(8) }}>Next
                    </Text>
                </ImageBackground>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonsContainer: {
        padding: 10,
    },
    textStyle: {
        textAlign: 'center',
        marginBottom: 8,
    },
});

export default Buttoncompoent;