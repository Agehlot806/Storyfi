import React, { useState } from 'react';
import {
    Button,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ScrollView, ImageBackground, TouchableOpacity, Image, FlatList
} from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import image from '../../assets';
import Headercompoent from '../../Compoent/Headercompoent';
const SelectStory = () => {


    const Dateklest = [{
        image1: image.childe1
    },
    {
        image1: image.childe1
    }]

    const Readertime = () => {
        return (
            <View style={{ height: moderateScale(150), width: "100%", padding: scale(10) }}>
                <TouchableOpacity>

                    <ImageBackground style={{ height: moderateScale(150), width: "100%", justifyContent: "center", alignItems: "center", }}

                        source={image.catergirecard}
                    >
                        <Image

                            style={{ height: moderateScale(80), width: moderateScale(80) }}
                            source={image.childe1}
                        />
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>

            <Headercompoent />
            <ScrollView style={{ flex: 1 }}>

                <FlatList

                    horizontal={true}
                    data={Dateklest}
                    renderItem={Readertime}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonsContainer: {
        padding: 10,
    },
    textStyle: {
        textAlign: 'center',
        marginBottom: 8,
    },
});

export default SelectStory;