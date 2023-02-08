
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ScrollView, Button, TouchableOpacity, View, Image, ActivityIndicator, ImageBackground } from "react-native";
import image from "../assets";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Restisationcompoent from '../Compoent/Restisationcompoent';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Buttoncompoent from "../Compoent/Buttoncompoent";
import { Checkbox } from "react-native-paper";
import { useFormik } from 'formik'
import { firebase } from "@react-native-firebase/database";
import firestore from '@react-native-firebase/firestore';
import { Authcontext } from "../Compoent/firebaseConfig";
import { auth } from '../Compoent/firebaseConfig';
import messaging from '@react-native-firebase/messaging' ;
import {RestistonActtion} from '../Redux/Actions/RestistonActtion'
import { requestUserPermission, NotifictionLiestner, GetFCtOKEAN } from '../Compoent/push'
import { useDispatch, useSelector } from "react-redux";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setpasswored] = useState("");
  const [error, setError] = useState(null);
  const [checked, setChecked] = React.useState(false);
  const [Redemai, setRedemai] = useState(false);
  const [Redpasswored, setRedpasswored] = useState(false);
  const [loding, setlodeing] = useState(false)
  const dispatch =useDispatch()
  const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
  const Savedatda = () => {
    // firestore()
    // .collection('Users')
    // .add({
    //     email: "A",
    //     password: "313"

    //   })
    //   .then(() => {
    //     console.log("Userer alll")
    //   })
    firestore()
      .collection('Users')
      .where('email', '==', email)
      .get()
      .then(querySnapshot => {
        //  console.log("Userer alll", querySnapshot.docs[0]._changes.email+""+ querySnapshot.docs[0]._changes.password )
        console.log("Users", querySnapshot);

      });
  }

  useEffect (()=>{
    dispatch(()=> RestistonActtion(dispatch))
  })
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);
  useEffect(() => {
    requestUserPermission();
    NotifictionLiestner();

  }, [])
  useEffect(
    React.useCallback(() => {
      setTimeout(() => {
        requestUserPermission();
        // alert("mnkljnjnuj")
      }, 1400)
    }, [])
  )
  const ALLLOGIN = async () => {
    if (!strongRegex.test(email)) {
      alert('Please fill this Email')
      setRedemai(true)
      return;
    } else if (password.length < 6) {
      setRedemai(false)
      setRedpasswored(true)
      alert('please fill this 6 characters')
      return;
    }
    else (
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log(" Login with firabse >>>>>", user)
          alert("You ar login successfully")
          setError(null)
          setpasswored(false)
          setRedemai(false)
          navigation.navigate("Bottomn")
          // ...
        })
    )
      .catch((error) => {
        if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
          setError('Your email or password was incorrect');
          setpasswored(true)
        } else if (error.code === 'auth/email-already-in-use') {
          setError('An account with this email already exists');
        } else {
          setError('Please check this email');
          setpasswored(false)
          setRedemai(true)
        }

      });
  }
  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
        setError('Your email or password was incorrect');
      } else if (error.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists');
      } else {
        setError('There was a problem with your request');
      }
    }
  };

  const Header = () => {
    return (
      <View style={{ height: moderateScale(220), }}>
        <ImageBackground style={{ height: moderateScale(200), width: "100%", justifyContent: "center" }} source={image.login}>
          <View style={{ height: moderateScale(120), width: "66%", alignItems: "flex-end" }}>
            <ImageBackground style={{ height: moderateScale(130), width: scale(120), alignItems: "center" }} source={image.login2}>
            </ImageBackground>
          </View>
        </ImageBackground>
      </View>
    )
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#EFF0FF", }}
    >
      <Header />
      <SafeAreaView style={{ backgroundColor: "white", width: "90%", marginLeft: scale(17), alignItems: "center" }}>
        <View style={{ backgroundColor: "white", width: "90%", }}>
          <Text style={{ fontSize: scale(16), color: "black", fontWeight: "500", padding: scale(5) }}>Login</Text>

          <View style={{ height: moderateScale(77), width: "90%", flexDirection: "row", alignItems: "center" }}>
            <View style={{ height: moderateScale(55), width: "100%", flexDirection: "row", alignItems: "center", }}>
              <View style={{ height: moderateScale(50), borderWidth: 1, borderColor: Redemai ? "red" : "#EFF0FF", width: "85%", borderRadius: 10, justifyContent: "center", marginLeft: scale(25), }}>
                <TextInput
                  style={{ height: moderateScale(40), fontSize: scale(16), color: "black", top: scale(2), marginLeft: scale(5) }}
                  onChangeText={setEmail}
                  value={email}
                  placeholder={"Email"}
                  placeholderTextColor={"black"}
                // outlineColor={Ferr ? "red" : "black"}
                />
              </View>
            </View>
          </View>

          <View style={{ height: moderateScale(77), width: "98%", flexDirection: "row", alignItems: "center" }}>
            <View style={{ height: moderateScale(55), width: "100%", flexDirection: "row", alignItems: "center", }}>
              <View style={{ height: moderateScale(50), borderWidth: 1, borderColor: Redpasswored ? "red" : "#EFF0FF", width: "85%", borderRadius: 10, justifyContent: "center", marginLeft: scale(25), }}>
                <TextInput
                  style={{ height: moderateScale(40), fontSize: scale(16), color: "black", top: scale(2), marginLeft: scale(5) }}
                  onChangeText={setpasswored}
                  value={password}
                  placeholder={"Password"}
                  //  placeholderTextColor={"black"} 
                  placeholderTextColor={"black"}
                  activeOutlineColor={"black"}
                // outlineColor={Ferr ? "red" : "black"}
                />
              </View>
            </View>
          </View>
          {error && <Text style={{ fontSize: 16, color: "red", textAlign: "center" }}>{error}</Text>}

          <View style={{ height: moderateScale(55), width: "100%", flexDirection: "row", }}>
            <View style={{ height: moderateScale(55), width: "20%", flexDirection: "row", alignItems: "flex-end" }}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
                color={"red"}
                theme="InternalTheme"
              />

            </View>
            <View style={{ height: moderateScale(55), width: "80%", flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: scale(15), color: "black", }}>
                Agree to by using app
              </Text>
            </View>
          </View>
          <Buttoncompoent

            title={"Register & Login"}
            onPress={ALLLOGIN}
          // disabled={!email || !password}
          // onPress={Savedatda}\
          //  enabled={!email || !password}d
          />
        </View>
        <View style={styles.contare1}>
          <TouchableOpacity style={styles.TouchableOpacitystyle1} >
            <Text style={[styles.textstyle, { color: "black", top: scale(6), fontSize: scale(15) }]}>{"New to DeAddictify"} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacitystyle}
            // onPress={() => navigation.navigate("Restistom")}
            onPress={() => navigation.navigate("Restistom")}
          >
            <Text style={[styles.textstyle, { color: "white" }]}>{"Register"} </Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </ScrollView>

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
    color: "black", marginLeft: scale(8), fontSize: scale(15)
  },
  TouchableOpacitystyle: {
    height: moderateScale(46),
    top: scale(18),
    borderRadius: scale(8),
    width: "47%", justifyContent: "center",
    flexDirection: "row", alignItems: "center",
    backgroundColor: "#2DB3FF",
    borderBottomEndRadius: scale(70),
    borderTopStartRadius: scale(55),
    // buttonStyle, backgroundColor: [csCode]

  },
  TouchableOpacitystyle1: {
    height: moderateScale(60),
    borderRadius: scale(8),
    width: "50%",
    borderBottomEndRadius: scale(45),
    justifyContent: "flex-end"

  },
  contare1: {
    height: moderateScale(120),
    width: "100%", justifyContent: "center",
    flexDirection: "row", alignItems: "center"

  },
  textstyle: {
    fontSize: scale(15),
    textAlign: "center",
    fontWeight: "500"

  },

});

export default Login;










// import React, { useState } from 'react';
// import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
// import { onAuthStateChanged, signOut } from 'firebase/auth';
// import { auth } from '../Compoent/firebaseConfig';
// const LoggedIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const logout = async () => {
//     try {
//       await signOut(auth);
//     } catch (e) {
//       console.error(e);
//     }
//   };
//   const loginUser = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
//         setError('Your email or password was incorrect');
//       } else if (error.code === 'auth/email-already-in-use') {
//         setError('An account with this email already exists');
//       } else {
//         setError('There was a problem with your request');
//       }
//     }
//   };
//   return (
//     <View style={{ flex: 1 }}>
//       <Text style={{ fontSize: 12, color: "red" }}>Login</Text>
//       {error && <Text style={{ fontSize: 12, color: "red" }}>{error}</Text>}
//       <TouchableOpacity onPress={() => setScreen('signup')}>
//         <Text style={{ fontSize: 12, color: "red" }}>Login</Text>
//       </TouchableOpacity>
//       <TextInput
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         placeholder="Enter email address"
//         autoCapitalize="none"
//         placeholderTextColor="#aaa"
//        />
//       <TextInput
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         placeholder="Enter password"
//         autoCapitalize="none"
//         placeholderTextColor="#aaa"
//        />
//       <TouchableOpacity onPress={() => setScreen('reset-password')}>
//         <Text style={{ fontSize: 12, color: "black" }}>Login</Text>
//       </TouchableOpacity>
//       <Button title="Login" onPress={loginUser} disabled={!email || !password} />
//     </View>

//   );
// }

// export default LoggedIn
//   //

