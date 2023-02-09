// import React, { useCallback, useEffect, useState } from 'react';
// import { View, Text, ImageBackground, Image, Button, FlatList } from 'react-native';
// import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
// import image from '../assets';
// import { useFocusEffect } from '@react-navigation/native';
// import { TextInput } from 'react-native-paper';
// // import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import Icon from 'react-native-vector-icons/dist/FontAwesome';


// const SplashScreen = ({ navigation }) => {
//     const [name, setname] = useState('')
//     const [name1, setname1] = useState('')
//     const [date, setdate] = useState([])
//     // const icon = <FontAwesome5Pro name={'comments'} light />;

//     return (
//         <View style={{ flex: 1, }}>
//             <View style={{ height: moderateScale(109), width: "100%", backgroundColor: "red", padding: 40 }}>

//                 <TextInput
//                     label="Mobile Number"
//                     mode='outlined'
//                     placeholder="pooo"
//                     contentStyle={{ height: moderateScale(45), width: "100%", backgroundColor: "green" }}
//                     outlineColor='red'

//                 // secureTextEntry
//                 // right={<TextInput.Icon icon="eye" />}
//                 />
//             </View>
//             {/* <View style={{ height: moderateScale(100), width: "100%", backgroundColor: "red", padding: 40 }}>

//                 <TextInput
//                     label="Eamil id"
//                     mode='outlined'
//                     placeholder="pooo"
//                     right={<TextInput.Icon icon="eye" />}

//                     // contentStyle={{ height: 12, width: 120, backgroundColor: "red" }}
//                     outlineColor='red'

//                 secureTextEntry={true}
//                  />
//             </View> */}

//         </View>
//     );
// }


// export default SplashScreen;





import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import  FloatingLabelInput  from 'react-native-floating-label-input';
const app = () => {
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [price, setPrice] = useState('');

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 30,
      }}
    >
      <FloatingLabelInput
        label="Birthday"
        value={birthday}
        mask="99/99/9999"
        keyboardType="numeric"
        onChangeText={value => setBirthday(value)}
      />
      <FloatingLabelInput
        label="Phone"
        value={phone}
        mask="(99)99999-9999"
        keyboardType="numeric"
        onChangeText={value => setPhone(value)}
      />
      <FloatingLabelInput
        label="Price"
        value={price}
        maskType="currency"
        currencyDivider="." // which generates: 9.999.999,99 or 0,99 ...
        keyboardType="numeric"
        onChangeText={value => setPrice(value)}
      />
    </ScrollView>
  );
};
export default app;
