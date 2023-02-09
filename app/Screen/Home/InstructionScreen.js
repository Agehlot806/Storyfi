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
import Headercompoent from '../../Compoent/Headercompoent';
import image from '../../assets';
import Backcompoent from '../../Compoent/Backcompoent';
import Buttoncompoent from '../../Compoent/Buttoncompoent';
import Bluecompoent from '../../Compoent/Bluecompoent';
const InstructionScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Backcompoent title={"Instruction"} />

            <ScrollView style={{ flex: 1 }}>
                <View style={{ top: scale(12), height: moderateScale(66), borderRadius: scale(8), width: "92%", marginLeft: scale(10), justifyContent: "center", backgroundColor: "#F7E8C4" }}>
                    <Text style={{ fontSize: scale(14), color: "grey", marginLeft: scale(22) }}>
                        You can customize with theme, character, setting, special situation.

                    </Text>
                </View>
                <View style={{ height: moderateScale(240), width: "100%", alignItems: "center", top: scale(20) }}>
                    <ImageBackground style={{ height: moderateScale(230), width: moderateScale(300), justifyContent: "center", alignItems: "center" }}

                        source={image.dore}
                    >
                        <Text style={{ fontSize: scale(13), color: "grey", marginLeft: scale(22) }}>
                            Type here : Ex. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonum Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed


                        </Text>

                    </ImageBackground>

                </View>
                <View style={{ height: moderateScale(230), }}>
                    <ImageBackground style={{ height: moderateScale(200), width: moderateScale(100), marginLeft: scale(15) }}

                        source={image.kiendss}
                    >


                    </ImageBackground>

                </View>
                <Buttoncompoent name={"Generic story"}

                    onPress={() => navigation.navigate('Mystory')}
                // 
                />
                <Bluecompoent name={"Customize story"} color={"#37C3F2"} />


            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    buttonsContainer: {
        padding: 10,
    },
    textStyle: {
        textAlign: 'center',
        marginBottom: 8,
    },
});

export default InstructionScreen;