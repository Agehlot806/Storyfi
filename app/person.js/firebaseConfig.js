// // const  firebaseConfig = {
// //     apiKey: "xxxxxxxx",
// //     authDomain: "firebaseformikproject-xxxxx.firebaseapp.com",
// //     projectId: "deaddictifly",
// //     storageBucket: "firebaseformikproject-xxxxx.appspot.com",
// //     messagingSenderId: "xxxxxxxxxxxxx",
// //     appId: "x:xxxxxxxxxxx:web:xxxxxxxxxxxxxxxxxx"
// //   };
// import React, { useState, createContext } from 'react';
// import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
// import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
// import image from '../assets';
// import { useNavigation } from '@react-navigation/native';
// import auth from '@react-native-firebase/auth'
// export const Authcontext = createContext()
// export const AuthProvider = ({ Chidean }) => {
//   const navigation = useNavigation();
//   const [user, setuser] = useState(null)

//   return (
//     <Authcontext.Provider

//       value={{
//         user,
//         setuser,
//         login: async (email, password) => {
//           try {
//             await auth().signInWithEmailAndPassword(email, password)
//           } catch (e) {
//             console.log("lllll>>>", e)
//           }
//         },
//         register: async (email, password) => {
//           try {
//             await auth().createUserWithEmailAndPassword(email, password)
//           }
//           catch (e) {
//             console.log("rrrrrr>>>>", e)
//           }
//         },
//         Logout: async (email, password) => {
//           try {
//             await auth().signOut()
//           }
//           catch (e) {
//             console.log("rrrrrr>>>>", e)
//           }
//         }
//       }}
//     >
//       {Chidean}
//     </Authcontext.Provider>
//   );
// }
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDNymHjRGgcyu1bIpkhGnd2idni6gj_C_c",
    authDomain: "deaddictifly.firebaseapp.com",
    databaseURL: "https://deaddictifly-default-rtdb.firebaseio.com",
    projectId: "deaddictifly",
    storageBucket: "deaddictifly.appspot.com",
    messagingSenderId: "409824872406",
    appId: "1:409824872406:web:e8b3c131c7fa12edfc8677",
    measurementId: "G-YPN69GV3PV"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
