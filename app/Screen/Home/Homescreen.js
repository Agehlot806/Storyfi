import React, { useState } from 'react';
import {
    Button,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ScrollView, ImageBackground, TouchableOpacity, Image
} from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import image from '../../assets';
import Headercompoent from '../../Compoent/Headercompoent';
const Homescreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

            <Headercompoent />
            <ScrollView style={{ flex: 1 }}>
                <View style={{ height: moderateScale(300), width: "100%", alignItems: "center", padding: scale(19), justifyContent: "center" }}>
                    <Image tyle={{ height: moderateScale(180), width: moderateScale(300), top: scale(8) }}
                        source={image.book1}>
                    </Image>
                </View>
                <View style={{ height: moderateScale(35), borderRadius: scale(8), width: "92%", marginLeft: scale(10), justifyContent: "center", backgroundColor: "#F7E8C4" }}>
                    <Text style={{ fontSize: scale(13), color: "grey", marginLeft: scale(22) }}>
                        What do you want to do ? Select from Below

                    </Text>
                </View>
                <View style={{ height: moderateScale(200), width: "100%", flexDirection: "row", top: scale(12), justifyContent: "space-evenly" }}>
                    <View style={{ height: moderateScale(200), width: "45%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CategoriesScreen')}>
                            <ImageBackground style={{ height: moderateScale(150), width: moderateScale(150), justifyContent: "center", alignItems: "center" }}

                                source={image.card}
                            >
                                <Image

                                    style={{ height: moderateScale(100), width: moderateScale(100) }}
                                    source={image.childe1}
                                />

                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: moderateScale(200), width: "45%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity>

                            <ImageBackground style={{ height: moderateScale(150), width: moderateScale(150), justifyContent: "center", alignItems: "center" }}

                                source={image.card}
                            >
                                <Image

                                    style={{ height: moderateScale(100), width: moderateScale(100) }}
                                    source={image.stdent}
                                />
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ height: moderateScale(45), width: "100%", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <View style={{ height: moderateScale(45), width: "45%", bottom: scale(12), alignItems: "center" }}>

                        <Text style={{ color: "black", fontSize: scale(15), fontWeight: "700" }}> Start  a new </Text>
                        <Text style={{ color: "black", fontSize: scale(15), fontWeight: "700" }}>  Starys</Text>

                    </View>
                    <View style={{ height: moderateScale(45), width: "45%", bottom: scale(12), alignItems: "center" }}>

                        <Text style={{ color: "black", fontSize: scale(15), fontWeight: "700" }}> View my
                        </Text>
                        <Text style={{ color: "black", fontSize: scale(15), fontWeight: "700" }}>stories</Text>

                    </View>


                </View>
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

export default Homescreen;