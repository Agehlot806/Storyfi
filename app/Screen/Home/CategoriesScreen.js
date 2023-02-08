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
const CategoriesScreen = ({navigation}) => {


    const Dateklest = [{
        image1: image.childe1
    },
    {
        image1: image.childe1
    }]

    const Readertime = () => {
        return (
            <View style={{ height: moderateScale(150), width: "100%", padding: scale(10) }}>
                <TouchableOpacity   onPress={() => navigation.navigate('SelectStory')}>

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
                <View style={{ height: moderateScale(70), width: "100%", flexDirection: "row", alignItems: "center" }}>
                    <View style={{ height: moderateScale(55), width: "30%", flexDirection: "column", justifyContent: "flex-end", marginLeft: scale(12) }}>
                        <Text style={{ color: "black", fontSize: scale(15), fontWeight: "500" }}>Categories
                        </Text>
                    </View>
                    <View style={{ height: moderateScale(55), width: "60%", flexDirection: "column", justifyContent: "flex-end", }}>
                        <Text style={{ color: "#57BBF3", fontSize: scale(15), fontWeight: "500", textAlign: "right" }}>See All
                        </Text>
                    </View>


                </View>
                <FlatList


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

export default CategoriesScreen;