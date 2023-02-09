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
import Navigation from '../../Appnavigatore/Navigation';
import image from '../../assets';
import Backcompoent from '../../Compoent/Backcompoent';
import Buttoncompoent from '../../Compoent/Buttoncompoent';
import ContinueCompoent from '../../Compoent/ContinueCompoent';
const Mystory = ({navigation}) => {


    const Dateklest = [{
        image1: image.childe1
    },
    {
        image1: image.childe1
    }]

    const Readertime = () => {
        return (
            <View style={{ height: moderateScale(280), width: "100%", flexDirection: "column", top: scale(11) }}>
                <View style={{ height: moderateScale(250), width: "100%", flexDirection: "row", justifyContent: "space-evenly", }}>
                    <View style={{ shadowOpacity: 12, shadowColor: "white", shadowRadius: 12, elevation: 12, borderRadius: scale(12), height: moderateScale(240), width: "45%", backgroundColor: "white", marginLeft: scale(12) }}>

                        <Image
                            style={{ height: moderateScale(150), width: scale(157), borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
                            source={image.kind}
                        />
                        <Text style={{ color: "black", textAlign: "center", fontSize: scale(14) }}>The Magic Lamp
                        </Text>
                        <TouchableOpacity >
                            <ImageBackground style={{ height: moderateScale(47), width: "100%", top: scale(6), justifyContent: "center" }} source={image.catergrei}>
                                <Text style={{ fontSize: scale(12), color: "#FFFFFF", textAlign: "center", bottom: scale(3) }}>See Story Details

                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>

                    </View>
                    <View style={{ borderRadius: scale(12), height: moderateScale(240), width: "45%", backgroundColor: "white", marginLeft: scale(12) }}>

                        <Image
                            style={{ height: moderateScale(150), width: scale(155), borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
                            source={image.kind}
                        />
                        <Text style={{ color: "black", textAlign: "center", fontSize: scale(14) }}>The Magic Lamp
                        </Text>
                        <TouchableOpacity >
                            <ImageBackground style={{ height: moderateScale(47), width: "100%", top: scale(6), justifyContent: "center" }} source={image.catergrei}>
                                <Text style={{ fontSize: scale(12), color: "#FFFFFF", textAlign: "center", bottom: scale(3) }}>See Story Details

                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 1 }}>

                <Backcompoent   title={"My Stories"} />
                <View style={{ top:scale(4)  ,height: moderateScale(39), borderRadius: scale(8), width: "92%", marginLeft: scale(10), justifyContent: "center", backgroundColor: "#F7E8C4" }}>
                    <Text style={{ fontSize: scale(14), color: "grey", marginLeft: scale(22),textAlign:"center" }}>
                    Here is your stories

                    </Text>
                </View>
                {/* <ScrollView style={{ flex: 1 }}> */}

                <FlatList

                    data={Dateklest}
                    renderItem={Readertime}
                />
              
                <Buttoncompoent name={"See All"}  onPress={() => navigation.navigate('InstructionScreen')} />
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

export default Mystory;