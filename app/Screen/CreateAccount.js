import React, { useCallback, useEffect, useState, useRef } from 'react';
import { View, Text, ImageBackground, Image, Button, FlatList, TextInput, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import PhoneInput from "react-native-phone-number-input";

import image from '../assets';
import { useFocusEffect } from '@react-navigation/native';
import Buttoncompoent from '../Compoent/Buttoncompoent';
// import { TextInput } from 'react-native-paper';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const SplashScreen = ({ navigation }) => {
  const [name, setname] = useState('')
  const [name1, setname1] = useState('')
  const [value, setValue] = useState("");
  const phoneInput = useRef(null);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ height: moderateScale(70), justifyContent: "center" }}>
        <Text style={{ fontSize: 25, color: "black", marginLeft: scale(20), fontWeight: "600" }}>Create Account
        </Text>
      </View>
      <View style={{ height: moderateScale(100), justifyContent: "center", alignItems: 'center', width: '100%', backgroundColor: "white", }}>
        <View style={{
          height: moderateScale(58), justifyContent: "flex-end", alignItems: 'center', width: '88%',
          flexDirection: 'row', borderRadius: 10, borderWidth: 1.5,
          backgroundColor: 'white', borderColor: "grey"
        }}>
          <View style={{ width: '35%', height: scale(30), backgroundColor: 'white', position: 'absolute', left: 25, bottom: 45, zIndex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: scale(12), fontWeight: '600', color: '#01031A' }}>
              Mobile Number
            </Text>
          </View>
          <View style={{ height: moderateScale(50), width: "12%", backgroundColor: "white", justifyContent: "center", alignItems: 'center', backgroundColor: 'white', }}>
            <Image source={image.phone}
              style={{ height: 22, width: 22, }}
            />
          </View>
          <PhoneInput
            containerStyle={styles.input}
            textContainerStyle={styles.inputText}
            textInputStyle={styles.inputText}
            codeTextStyle={styles.CodeText}
            ref={phoneInput}
            defaultValue={value}
            defaultCode="ID"
            layout="second"
            onChangeText={(text) => {
              setValue(text);
            }}
            countryPickerProps={{ withAlphaFilter: true }}
            withDarkTheme={false}
            withShadow
            autoFocus
          />
        </View>

      </View>
      <View style={{ height: moderateScale(100), justifyContent: "center", alignItems: 'center', width: '100%', backgroundColor: "white", }}>
        <View style={{
          height: moderateScale(58), alignItems: 'center', width: '88%',
          flexDirection: 'row', borderRadius: 10, borderWidth: 1.5,
          backgroundColor: 'white', borderColor: "grey"
        }}>
          <View style={{ width: '30%', height: scale(30), backgroundColor: 'white', position: 'absolute', left: 25, bottom: 45, zIndex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: scale(12), fontWeight: '600', color: '#01031A' }}>
              Email ID
            </Text>
          </View>
          <View style={{ height: moderateScale(20), width: "33%", marginLeft: scale(18) }}>
            <Image source={image.email}
              style={{ height: 25, width: 25, }}
            />
          </View>
          <View style={{ height: moderateScale(50), width: "70%", }}>
            <TextInput
              style={{ textAlign: "left", fontSize: 20, color: "black", marginLeft: scale(-33), top: scale(7) }}
              placeholderTextColor={"black"}
              placeholder='********'
              keyboardType='email-address'
            />
          </View>
        </View>

      </View>
      <View style={{ height: moderateScale(100), justifyContent: "center", alignItems: 'center', width: '100%', backgroundColor: "white", }}>
        <View style={{
          height: moderateScale(58), alignItems: 'center', width: '88%',
          flexDirection: 'row', borderRadius: 10, borderWidth: 1.5,
          backgroundColor: 'white', borderColor: "grey"
        }}>
          <View style={{ width: '30%', height: scale(30), backgroundColor: 'white', position: 'absolute', left: 25, bottom: 45, zIndex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: scale(12), fontWeight: '600', color: '#01031A' }}>
              Password
            </Text>
          </View>
          <View style={{ height: moderateScale(20), width: "33%", marginLeft: scale(18) }}>
            <Image source={image.lock}
              style={{ height: 25, width: 25, }}
            />
          </View>
          <View style={{ height: moderateScale(50), width: "45%", justifyContent: "center" }}>
            <TextInput
              style={{ textAlign: "left", fontSize: 20, color: "black", marginLeft: scale(-33), top: scale(7) }}
              placeholderTextColor={"black"}
              placeholder='********'
              keyboardType='email-address'
            />
          </View>
          <View style={{ height: moderateScale(50), width: "25%", justifyContent: "center" }}>
            <Image source={image.hideEyes}
              style={{ height: 25, width: 25, }}
            />
          </View>
        </View>

      </View>
      <View style={{ height: moderateScale(100), justifyContent: "center", alignItems: 'center', width: '100%', backgroundColor: "white", }}>
        <View style={{
          height: moderateScale(58), alignItems: 'center', width: '88%',
          flexDirection: 'row', borderRadius: 10, borderWidth: 1.5,
          backgroundColor: 'white', borderColor: "grey"
        }}>
          <View style={{ width: '30%', height: scale(30), backgroundColor: 'white', position: 'absolute', left: 25, bottom: 45, zIndex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: scale(12), fontWeight: '600', color: '#01031A' }}>
              New Password
            </Text>
          </View>
          <View style={{ height: moderateScale(20), width: "33%", marginLeft: scale(18) }}>
            <Image source={image.lock}
              style={{ height: 25, width: 25, }}
            />
          </View>
          <View style={{ height: moderateScale(50), width: "45%", justifyContent: "center" }}>
            <TextInput
              style={{ textAlign: "left", fontSize: 20, color: "black", marginLeft: scale(-33), top: scale(7) }}
              placeholderTextColor={"black"}
              placeholder='********'
              keyboardType='email-address'
            />
          </View>
          <View style={{ height: moderateScale(50), width: "25%", justifyContent: "center" }}>
            <Image source={image.hideEyes}
              style={{ height: 25, width: 25, }}
            />
          </View>
        </View>

      </View>
      <Buttoncompoent name={"Continue"} 
      onPress={() => navigation.navigate('Loginscreen')}
       />

    </View>
  );
}


const styles = StyleSheet.create({
  input: {
    height: scale(50),
    width: "85%",
    borderRadius: 5,
    marginBottom: scale(15),
    marginHorizontal: scale(1),
    alignItems: 'center',
    backgroundColor: 'white',
    paddingRight: scale(5),
    top: 8,
  },
  inputText: {
    borderRadius: 5,
    width: "50%",
    height: scale(40),
    fontSize: scale(13),
    fontWeight: '400',
    backgroundColor: 'white',
    color: 'grey',
  },
  CodeText: {
    alignItems: 'center',
    paddingTop: scale(15),
    flexDirection: 'column',
    height: scale(50),
    width: "35%",
  }

});

export default SplashScreen;





// import React, { useState } from 'react';
// import { ScrollView } from 'react-native';
// import  FloatingLabelInput  from 'react-native-floating-label-input';
// const app = () => {
//   const [birthday, setBirthday] = useState('');
//   const [phone, setPhone] = useState('');
//   const [price, setPrice] = useState('');

//   return (
//     <ScrollView
//       keyboardShouldPersistTaps="handled"
//       contentContainerStyle={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'stretch',
//         margin: 30,
//         backgroundColor:"red"
//       }}
//     >
//       <View >
//       <FloatingLabelInput
//         label="Birthday"
//         value={birthday}
//         mask="99/99/9999"
//         keyboardType="numeric"
//         onChangeText={value => setBirthday(value)}
//         // customLabelStyles
//         // hintTextColor
//         // currencyDivider
//         // customShowPasswordImage
//         // customHidePasswordImage
//         // showPasswordImageStyles
//         // labelStyles
//         // showPasswordImageStyles
//       />
//       <FloatingLabelInput
//         label="Phone"
//         value={phone}
//         mask="(99)99999-9999"
//         keyboardType="numeric"
//         onChangeText={value => setPhone(value)}
//       />
//       <FloatingLabelInput
//         label="Price"
//         value={price}
//         maskType="currency"
//         currencyDivider="."
//         keyboardType="numeric"
//         onChangeText={value => setPrice(value)}
//       />
//       </View>
//     </ScrollView>
//   );
// };
// export default app;
