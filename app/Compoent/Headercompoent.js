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

const Headercompoent = ({ onPress }) => {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={{ height: moderateScale(170), width: "100%", }} source={image.headerimage}>
                <View style={{ height: moderateScale(90), top: scale(25), width: "100%",   flexDirection: "row", alignItems: "center" }}>
                    <View style={{ height: moderateScale(45), width: "15%", justifyContent: "center", alignItems: "center" }}>

                        <Image source={image.menu}


                            style={{ height: 32, width: 32 }}
                        />

                    </View>
                    <View style={{ height: moderateScale(45), width: "45%", }}>

                        <Text style={{ fontSize: scale(18), color: "white", fontWeight: "500" }}>Hello !
                        </Text>
                        <Text style={{ fontSize: scale(11),   }}>Lorem Ipsum is simply

                        </Text>

                    </View>
                    <View style={{ height: moderateScale(45), width: "50%", alignItems: "center" }}>

                        <Image source={{ uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" }}


                            style={{ height: scale(38), width: scale(38),borderRadius:scale(40) }}
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

export default Headercompoent;