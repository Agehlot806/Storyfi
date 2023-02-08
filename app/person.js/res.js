import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, BackHandler, ScrollView, Button, TouchableOpacity, Text, View, Image, ActivityIndicator, KeyboardAvoidingView, Alert } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import DropDownPicker from "react-native-dropdown-picker";
import Restisationcompoent from '../Compoent/Restisationcompoent';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Buttoncompoent from "../Compoent/Buttoncompoent";
// import auth from '@react-native-firebase/auth';
import { firebase } from "@react-native-firebase/database";
import firestore from '@react-native-firebase/firestore';
import { auth } from '../Compoent/firebaseConfig';
import {
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    getToken
} from 'firebase/auth';
const Restistion = ({ navigation }) => {
    const [Email, setEmail] = useState('');
    const [Password, setpasswored] = useState("");
    const [County, setCounty] = useState();
    const [value, setValue] = React.useState('');
    const [Redemai, setRedemai] = useState(false);
    const [Redpasswored, setRedpasswored] = useState(false);
    const [Redcounty, setRedcounty] = useState(false);
    const [openCountry, setopenCountry] = React.useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const backAction = () => {
            Alert.alert('Hold on!', 'Are you sure you want to go back?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => BackHandler.exitApp() },
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);


    const createAccount = async ({ setScreen }) => {
        try {
            if (!strongRegex.test(Email) === County) {
                await createUserWithEmailAndPassword(auth, Email, Password);
            } else {
                setError("Passwords don't match");
            }
        } catch (e) {
            setError('There was a problem creating your account');
        }
    };

    const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    const ALLLOGIN = () => {
        if (!strongRegex.test(Email)) {
            alert('Please fill this Email')
            setRedemai(true)
            return;
        } else if (Password.length < 6) {
            setRedemai(false)
            alert('please fill this 6 characters')
            setRedpasswored(true)
            return;
        }
        else if (County == null) {
            setRedpasswored(false)
            setRedcounty(true)
            alert('please fill this County')
            return;
        }
        else (
            firebase.auth().createUserWithEmailAndPassword(Email, Password)
                .then((userCredential) => {
                    // firebase.auth().getToken(Email, Password)
                    var user = userCredential.user;
                    console.log("login successfully >>>>", user)
                    const uid = user.uid;
                    console.log("user.uid ---->>", uid)
                    setRedemai(false)
                    setRedpasswored(false)
                    setRedcounty(false)
                    setError(null)
                    alert("You are login successfully")
                    navigation.navigate("Bottomn")
                    // ... 
                })
        )
            .catch((error) => {
                if (error.code == "auth/email-already-in-use") {
                    alert("The email address is already in use");
                    setRedemai(true)
                    setError("The email  is already in use");
                } else if (error.code == "auth/invalid-password-salt") {
                    alert("password-hash");
                    setError("The password  is already in use");
                } else if (error.code == "auth/operation-not-allowed") {
                    alert("Operation not allowed.");
                    setError("Operation not allowed.");
                }
                else if (error.code == "auth/invalid-email") {
                    alert("auth/invalid-email");
                    setError("invalid-email");
                }
                else if (error.code == "auth/internal-error") {
                    alert("internal-error");
                }
            });
    }
    const Tokan = () => {
        getAuth()
            .createCustomToken(uid)
            .then((customToken) => {
                // Send token back to client
                console.log(">****Token", customToken)
            })
            .catch((error) => {
                console.log('Error creating custom token:', error);
            });
    }
    const [items, setItems] = React.useState([
        { label: 'Alcoho', value: 'Alcoho' },
        { label: 'Prnography', value: 'Prnography' },
        { label: 'Shopping', value: 'Shopping' },
    ]);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#EFF0FF", }}>
            <Restisationcompoent />
            <ScrollView style={{ backgroundColor: "white", width: "90%", marginLeft: scale(17) }}>
                <KeyboardAvoidingView>
                    <View style={{ height: moderateScale(77), width: "98%", flexDirection: "row", alignItems: "center" }}>
                        <View style={{ height: moderateScale(55), width: "100%", flexDirection: "row", alignItems: "center", }}>
                            <View style={{ height: moderateScale(50), borderWidth: 1, borderColor: Redemai ? "red" : "#EFF0FF", width: "85%", borderRadius: 10, justifyContent: "center", marginLeft: scale(25), }}>
                                <TextInput
                                    style={{ height: moderateScale(40), fontSize: scale(16), color: "black", top: scale(2), marginLeft: scale(5) }}
                                    onChangeText={setEmail}
                                    value={Email}
                                    placeholder={"Email"}
                                    placeholderTextColor={"black"}
                                // outlineColor={Ferr ? "red" : "black"}
                                />
                            </View>
                        </View>

                    </View>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView>
                    <View style={{ height: moderateScale(77), width: "98%", flexDirection: "row", alignItems: "center" }}>
                        <View style={{ height: moderateScale(55), width: "100%", flexDirection: "row", alignItems: "center", }}>
                            <View style={{ height: moderateScale(50), borderWidth: 1, borderColor: Redpasswored ? "red" : "#EFF0FF", width: "85%", borderRadius: 10, justifyContent: "center", marginLeft: scale(25), }}>
                                <TextInput
                                    style={{ height: moderateScale(40), fontSize: scale(16), color: "black", top: scale(2), marginLeft: scale(5) }}
                                    onChangeText={setpasswored}
                                    value={Password}
                                    placeholder={"Password"}
                                    //  placeholderTextColor={"black"} 
                                    mode="outlined"
                                    label="Password"
                                    placeholderTextColor={"black"}
                                    activeOutlineColor={"black"}
                                // outlineColor={Ferr ? "red" : "black"}
                                />
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView>
                    <View style={{ height: moderateScale(77), width: "98%", flexDirection: "row", alignItems: "center" }}>
                        <View style={{ height: moderateScale(55), width: "100%", flexDirection: "row", alignItems: "center", }}>

                            <View style={{ height: moderateScale(50), borderWidth: 1, borderColor: Redcounty ? "red" : "#EFF0FF", width: "85%", borderRadius: 10, justifyContent: "center", marginLeft: scale(25), }}>
                                <TextInput
                                    style={{ height: moderateScale(40), fontSize: scale(16), color: "black", top: scale(2), marginLeft: scale(5) }}
                                    onChangeText={setCounty}
                                    value={County}
                                    placeholder={"County"}
                                    //  placeholderTextColor={"black"} 
                                    mode="outlined"
                                    label="County"
                                    placeholderTextColor={"black"}
                                    activeOutlineColor={"black"}
                                // outlineColor={Ferr ? "red" : "black"}
                                />
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
                <View style={{ marginTop: moderateScale(5), width: '100%', paddingHorizontal: scale(20) }}>
                    <View style={{ zIndex: 1 }}>
                        <DropDownPicker
                            dropDownDirection="BOTTOM"
                            open={openCountry}
                            value={value}
                            items={items}
                            setOpen={setopenCountry}
                            setValue={setValue}
                            setItems={setItems}
                            zIndex={1000}
                            zIndexInverse={1000}
                            itemTextStyle={{ backgroundColor: "red", zIndex: 3 }}
                            containerStyle={{ borderColor: "blue", position: 'relative', paddingTop: 10 }}
                            labelStyle={{ color: "black", fontSize: scale(15) }}
                            childrenContainerStyle={{
                                borderColor: "blue",
                                zIndex: 2,
                                height: 300,
                            }}
                            style={{
                                // backgroundColor: colors.white,
                                borderColor: '#EFF0FF',
                                zIndex: 2000,
                                borderWidth: 2,
                                position: 'relative',
                            }} 
                            itemStyle={{ justifyContent: 'flex-start' }}
                            dropDownStyle={{ zIndex: 1000, backgroundColor: '#fafafa', height: 100 }}
                            dropDownContainerStyle={{
                                backgroundColor: 'white',
                                borderColor: "blue",
                                height: moderateScale(120)
                            }}
                        />
                    </View>
                </View>
                {error && <Text style={{ fontSize: 18, color: "red", textAlign: "center", padding: scale(8), top: scale(12) }}>{error}</Text>}
                <Buttoncompoent title={"Register & Login"}
                    // onPress={() => navigation.navigate("Restistom")}
                    onPress={ALLLOGIN}
                />
                {/* <Button
                    title="Create Account"
                    onPress={createAccount}
                    disabled={!Email || !Password || !County}
                /> */}

            </ScrollView>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    inputview: {
        height: moderateScale(600), padding: scale(8), width: "100%", flexDirection: "column",
    },
    Textinput: {
        height: moderateScale(30), top: scale(17), width: "100%", justifyContent: "center",
    },
    textstyle: {
        color: "grey", marginLeft: scale(8), fontSize: 18
    },

});

export default Restistion;



















// import React, { useState } from 'react';
// import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// import {
//   onAuthStateChanged,
//   signOut,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   sendPasswordResetEmail,
// } from 'firebase/auth';

// import { auth } from './firebase';

// function LoggedIn() {
//   const logout = async () => {
//     try {
//       await signOut(auth);
//     } catch (e) {
//       console.error(e);
//     }
//   };

