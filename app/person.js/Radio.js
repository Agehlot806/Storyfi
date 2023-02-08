import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text,ImageBackground, TextInput,Animated, ScrollView, Button, TouchableOpacity, View, Image } from "react-native";
import image from "../assets";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
const InputextCompoent = () => {
    const [checked, setChecked] = React.useState('first');
    const [checked1, setChecked1] = React.useState(true);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);
    const [checked5, setChecked5] = React.useState(false);
    const [checked6, setChecked6] = React.useState(false);
    const [secound, setsecound] = React.useState(0);
     const [Modalshow,setModalshow]=useState(true);
     const [Allradio,setAllradio]=useState()
    //  CONST [AllRadio,SETALLrADIO]
    // var timer ;
    // useEffect(()=>{
    //   timer=setInterval(()=>{
    //     setsecound(secound +1);
    //     if(secound ===20)
    //     setminute(minute);
    //     setsecound(0);
    //   },1000)
    //   return()=>clearInterval(timer)
    // },)
    const check =async()=>{
      const jsonValue = await AsyncStorage.setItem("check",Modalshow)
    }
   useEffect(()=>{
    All();
    RadioColur();
     getMoviesFromApi()
    var today = new Date();
   var dd = String(today.getDate()).padStart(2, '0');
   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
   var yyyy = today.getFullYear();
   today = mm + '/' + dd + '/' + yyyy;
  console.log('hello current date',today);
  setCureent(today)
   },[])

   const [Cureent,setCureent]=useState();
 const sp =(Vale)=>{
     if(Vale =="first"){
        setChecked("one")
        setChecked1(false)
        setChecked2(false)
        setChecked3(false)
        setChecked4(false)
              } else
        if(Vale =="second"){
        setChecked("second")
         setChecked1(false)
        setChecked3(false)
        setChecked4(false)
        setChecked2(true)

         }
       else
        if(Vale =="thred"){
            setChecked1(false)
            setChecked3(true)
            setChecked4(false)
            setChecked2(false)
        }
        else
        if(Vale =="four"){
        setChecked("four")
        setChecked1(false)
        setChecked2(false)
        setChecked3(false)
        setChecked4(true)
       }
         else
        if(Vale =="five"){
        setChecked("five")
        setChecked1(false)
        setChecked2(false)
        setChecked3(false)
        setChecked4(false)
        setChecked5(true)
       }
         else
        if(Vale =="six"){
        setChecked("six")
        setChecked1(false)
        setChecked2(false)
        setChecked3(false)
        setChecked4(false)
        setChecked5(false)
       }
       else
       if(Vale =="seveen"){
       setChecked("seveen")
      }
       else(
        setChecked("first")
       )
}
const All =()=>{
for(i=0;i<=Allradio;i++){
    <RadioButton
 />
}

}

const RadioColur = async () => {
  const jsonValue = await AsyncStorage.getItem("IdA",)
   console.log("GGGGG",jsonValue)
  let url = `http://demo4.progressiveaidata.in/api/user-total-day/${jsonValue}`
   var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  };
  fetch(url, {
      method: 'GET',
      credentials: 'same-origin',
      mode: 'same-origin',
      headers: headers,
  })
      .then(response => response.json())
      .then(response => {
        console.log(" Radio Response ----->>>",response.user_day);
        console.log(" Rad ----->>>",Allradio);
        setAllradio(response.user_day);
        //  if (response.status_code ==200){
        // //   alert("Susfully")
        // // setModalshow(false)
        // // jsonValue
        // }
        })
      .catch(error => {
          console.error('eRRORR >>>>r', error);
      });
};


const getMoviesFromApi = async () => {
  const jsonValue = await AsyncStorage.getItem("IdA",)
  let url = `http://demo4.progressiveaidata.in/api/user-get-data/${jsonValue}`
   var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  };
  fetch(url, {
      method: 'GET',
      credentials: 'same-origin',
      mode: 'same-origin',
      headers: headers,
  })
      .then(response => response.json())
      .then(response => {
        console.log("Star",response.user_data.created_at);
        if(response.user_data.end_date ==Cureent ){
          setModalshow(true)
          alert("?End date alert")
        }else{
          // alert("Start date alert")
        }
        })
      .catch(error => {
          console.error('catch gdwaasjhgdhgdg error', error);
      });
};

// useEffect(() => {
//     AllRMOVE();
//     Showalert();
// }, [])
const Showalert = async () => {
  const jsonValue = await AsyncStorage.getItem("IdA",)
   console.log("GGGGG",jsonValue)
  let url = `http://demo4.progressiveaidata.in/api/user-alert/${jsonValue}`
   var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  };
  fetch(url, {
      method: 'POSt',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
         status:'Yes',
         get_status:Modalshow
    }),
      headers: headers,
  })
      .then(response => response.json())
      .then(response => {
        console.log("Show ----->>>",response);
        console.log("Show ----->>>",Modalshow);
        if (response.status_code ==200){
          alert("Susfully")
        setModalshow(false)
        // jsonValue
        }
        })
      .catch(error => {
          console.error('catch gdwaasjhgdhgdg error', error);
      });
};

 




    return (
        <View   style={{flex:1}}>
        <View style={styles.TouchableOpacitystyle}>
                             {/* <Animated.View style={[styles.item, { transform }]}> */}
                             <Animated.View style={[styles.item, ]}>
                  {/* <Animated.View style={[styles.topItem, { transform: transform1 }]}> */}
                  <Animated.View style={[styles.topItem,  ]}>
                  {checked1 ? (<Text style={{ fontSize: 12, color: "black" }}> Day 1</Text>):null
}
{checked2 ? (<Text style={{ fontSize: 12, color: "black" }}> Day 2</Text>):null
}
{checked3 ? (<Text style={{ fontSize: 12, color: "black" }}> Day 3</Text>):null
}
{checked4 ? (<Text style={{ fontSize: 12, color: "black" }}> Day 4</Text>):null
}
{checked5 ? (<Text style={{ fontSize: 12, color: "black" }}> Day 5</Text>):null
}
{checked6 ? (<Text style={{ fontSize: 12, color: "black" }}> Day 6</Text>):null
}


                                  
                                   </Animated.View>       
         </Animated.View>
         </View>
            <View style={{ height: moderateScale(70), width: "100%", flexDirection: "row" }}>
                <View style={{ height: moderateScale(20), width: "15%", alignItems: "center", justifyContent: "center" }}>
                <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        // onPress={() => setChecked('first')}
                onPress={() => sp('one')}
      />
                    <Text style={{ fontSize: 12, color: "black" }}> Day 1</Text>
                </View>
                <View style={{ height: moderateScale(20), width: "14%", alignItems: "center", justifyContent: "center" }}>
                <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => sp('second')}
      />
                    <Text style={{ fontSize: 12, color: "black" }}> Day 2</Text>
                </View>
                <View style={{ height: moderateScale(20), width: "14%", alignItems: "center", justifyContent: "center" }}>
                <RadioButton
        value="thred"
        status={ checked === 'thred' ? 'checked' : 'unchecked' }
                onPress={() => sp('thred')}
      />
                    <Text style={{ fontSize: 12, color: "black" }}> Day 3</Text>
                </View>
                <View style={{ height: moderateScale(20), width: "14%", alignItems: "center", justifyContent: "center" }}>

                <RadioButton
        value="four"
        status={ checked === 'four' ? 'checked' : 'unchecked' }
                onPress={() => sp('four')}
      />
                    <Text style={{ fontSize: 12, color: "black" }}> Day 4</Text>
                </View>
                <View style={{ height: moderateScale(20), width: "14%", alignItems: "center", justifyContent: "center" }}>

                <RadioButton
        value="five"
        status={ checked === 'five' ? 'checked' : 'unchecked' }
                onPress={() => sp('five')}
      />
<Text style={{ fontSize: 12, color: "black" }}> Day 5</Text>
</View>

<View style={{ height: moderateScale(20), width: "14%", alignItems: "center", justifyContent: "center" }}>
 <RadioButton
        value="six"
        status={ checked === 'six' ? 'checked' : 'unchecked' }
                onPress={() => sp('six')}
      />
<Text style={{ fontSize: 12, color: "black" }}> Day 6</Text>
</View>

<View style={{ height: moderateScale(20), width: "14%", alignItems: "center", justifyContent: "center" }}>

<RadioButton
        value="seveen"
        status={ checked === 'seveen' ? 'checked' : 'unchecked' }
                onPress={() => sp('seveen')}
      />
     <Text style={{ fontSize: 12, color: "black" }}> Day 6</Text>
        </View>
            </View>

{/* </View> */}

<View style={styles.TouchableOpacitystyle}>
                    <Text style={{ fontSize: 15, color: "black", marginLeft: scale(12), fontWeight: "500" }}>Your Goals</Text>
                    <View style={{ height: moderateScale(25), width: "100%", alignItems: "center", flexDirection: "row", justifyContent: 'space-around' }}>
                        <View style={styles.contare1}>
                            <Text style={styles.textstyle}>Current Achievement </Text>
                        </View>
                        <View style={styles.contare1}>
                            <Text style={styles.textstyle}>Next goal</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ height: moderateScale(90), width: "90%", marginLeft: scale(15), alignItems: "center", flexDirection: "row" }}>
                            <View style={styles.contare1}>
                                <View style={styles.contare1}>
                                    <Image
                                        style={{ width: moderateScale(100), height: moderateScale(90), marginLeft: scale(18) }}
                                        source={{ uri: "https://i.pinimg.com/originals/f7/0f/91/f70f914c082fde275a2386a33623ac91.gif" }}
                                    />
                                </View>
                            </View>
                            <View style={styles.contare1}>
                                <Image
                                    style={{ width: moderateScale(100), height: moderateScale(90), marginLeft: scale(18) }}
                                    source={{ uri: "https://i.pinimg.com/originals/f7/0f/91/f70f914c082fde275a2386a33623ac91.gif" }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                 <View style={{height:moderateScale(150),width:'100%',}}>
            <View style={{ height: moderateScale(40), width: "90%", marginLeft: scale(12), top: scale(10) }}>
                <Text style={[styles.textstyle, { fontSize: scale(14), }]}>Daliy checkin</Text>
                <Text style={[styles.textstyle, { fontWeight: "400" }]}>Where you successfully yesterday</Text>
               </View>
            <View style={{ height: moderateScale(80), top: scale(15),  width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "row",  }}>
            {            Modalshow ? (         <View style={{ height: moderateScale(80),  backgroundColor: '#005676', flexDirection: 'row', width: '50%', justifyContent: 'space-between' }}>
{            Modalshow ? (        <TouchableOpacity    onPress={Showalert}>
                        <ImageBackground style={ {height:moderateScale(60),width:scale(55),  top:scale(8),  marginLeft:scale(12) }} source={image.maincolur}>
                            <Image style={{ height: scale(35), width: scale(35),marginLeft:scale(10),top:scale(3) }}
                                source={image.success}
                            />
                            <Text style={{ color: "white", fontSize: scale(14),marginLeft:scale(15) }}>Yes</Text>
                        </ImageBackground>
                        </TouchableOpacity>):null}
                        {        Modalshow   ?(   <TouchableOpacity   onPress={Showalert}>
      <ImageBackground style={ {height:moderateScale(58),width:scale(55),  top:scale(8),  marginLeft:scale(17) }} source={image.maincolur}>
                         <Image style={{ height: scale(37), width: scale(37),marginLeft:scale(7) }}
                            source={image.close}
                        />
                        <Text style={{ color: "white", fontSize: scale(14),marginLeft:scale(15) }}>No</Text>
                </ImageBackground>
                    </TouchableOpacity>):null}
                </View>):null}
             </View>
        </View>
        {/* <Text   style={{color:"red",textAlign:"center"}}>{secound}</Text> */}
        </View>
    );
};
const styles = StyleSheet.create({
    TouchableOpacitystyle: {
        height: moderateScale(300),   width: "100%", flexDirection: "column", justifyContent: "flex-end", backgroundColor: "red"
    },
    contare1: {
        height: moderateScale(120),
        width: "100%", justifyContent: "center",
        flexDirection: "row", alignItems: "center",backgroundColor: "red"

    },
    textstyle: {
        fontSize: 24,
        textAlign: "center",
        // color: { color },
        fontWeight: "500"

    },
    item: {
        position: 'relative',
        width: moderateScale(100),
        height: moderateScale(100), // this is the diameter of circle
        backgroundColor: "blue",
        
        borderWidth: 1,
        borderRadius: 55,
        bottom: scale(20),
        marginLeft: scale(120),

    },
    topItem: {
        width: '100%',
        height: moderateScale(120),
        //  position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#0097CE",
        width: moderateScale(120),
        borderRadius: scale(120),
        top: scale(12)
    },
    text: {
        color: '#fff',
    },
    TouchableOpacitystyle: {
        height: moderateScale(250),
        // backgroundColor:"white",
        top: scale(12), width: "100%", flexDirection: "column", justifyContent: "flex-end",
    },
    contare1: {
        height: moderateScale(120),
        width: "100%", justifyContent: "center",
        flexDirection: "row", alignItems: "center"

    },
    textstyle: {
        fontSize: 24,
        textAlign: "center",
        // color: { color },
        fontWeight: "500"

    },
    TouchableOpacitystyle: {
      height: moderateScale(125),
      backgroundColor: "#FFEBB7",
      top: scale(5),
      // backgroundColor:"red"
      // top: 8
  },
  TouchableOpacitystyle1: {
      height: moderateScale(43),
      borderRadius: scale(8),
      width: "30%",
      justifyContent: "center",
      backgroundColor: "#0097CE",
      padding: scale(11),
      margin: scale(20),
      flexDirection: "row"

  },
  contare1: {
      height: moderateScale(70),
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      flexDirection: "row",


  },
  textstyle: {
      color: "black",
      fontWeight: "500"
  },
  logo: {
      width: 120,
      height: 120,
      resizeMode: 'contain'
  },
  TouchableOpacitystyle: {
    height: moderateScale(150),
    backgroundColor: "#A5E2FF",
},
contare1: {
    height: moderateScale(70),
    justifyContent: "center",
    alignItems: "center",
    width: scale(60),


},
textstyle: {
    color: "black",
    fontWeight: "600"
},
logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain'
},
TouchableOpacitystyle: {
  height: moderateScale(150),
  backgroundColor: "white",
  // shadowColor: "white",
  justifyContent: "center",

},
contare1: {
  height: moderateScale(25), width: "50%", alignItems: "center", justifyContent: "center",
},
textstyle: {
  fontSize: scale(13), color: "black", fontWeight: '400'
},
logo: {
  width: 120,
  height: 120,
  resizeMode: 'contain'
},
});

export default InputextCompoent;



// import React, { Component } from 'react';
// import { View, Text, Animated, StyleSheet, Easing } from 'react-native';
// import { moderateScale, scale } from 'react-native-size-matters';
// import { RadioButton } from 'react-native-paper';
// export default class Circle extends Component {
//     constructor() {
        
//         super();
//         this.animated = new Animated.Value(0);
//         var inputRange = [0, 1];
//         var outputRange = ['0deg', '360deg'];
//         this.rotate = this.animated.interpolate({ inputRange, outputRange });
//         outputRange = ['0deg', '-360deg'];
//         this.rotateOpposit = this.animated.interpolate({ inputRange, outputRange });
//     }

//     componentDidMount() {
//         this.animate();
//     }

//     animate() {
//         Animated.loop(
//             Animated.timing(this.animated, {
//                 toValue: 1,
//                 duration: 4000,
//                 useNativeDriver: true,
//                 easing: Easing.linear,
//             }),
//         ).start();
//     }
//     render() {
//         const transform = [{ rotate: this.rotate }];
//         const transform1 = [{ rotate: this.rotateOpposit }];
//         return (
//             <View style={styles.container}>
//                 <Animated.View style={[styles.item, { transform }]}>
//                     <Animated.View style={[styles.topItem, { transform: transform1 }]}>
//                         <Text style={styles.text}>1 day</Text>
//                     </Animated.View>
//                 </Animated.View>
//                 {/* <View style={styles.TouchableOpacitystyle}> */}
//                 <View style={{ height: moderateScale(80), width: "100%", flexDirection: "row" }}>
//                     <View style={{ height: moderateScale(55), width: "15%", alignItems: "center", justifyContent: "center" }}>

//                         <RadioButton
//                         // value="first"
//                         // status={checked === 'first' ? 'checked' : 'unchecked'}
//                         // onPress={() => setChecked('first')}
//                         />

//                         <Text style={{ fontSize: 12, color: "black" }}> Day 1</Text>
//                     </View>
//                     <View style={{ height: moderateScale(55), width: "15%", alignItems: "center", justifyContent: "center" }}>

//                         <RadioButton
//                         // value="second"
//                         // status={ checked === 'second' ? 'checked' : 'unchecked' }
//                         // onPress={() => setChecked('second')}
//                         />
//                         <Text style={{ fontSize: 12, color: "black" }}> Day 2</Text>

//                     </View>
//                     <View style={{ height: moderateScale(55), width: "15%", alignItems: "center", justifyContent: "center" }}>

//                         <RadioButton
//                         // value="therd"
//                         // status={ checked === 'therd' ? 'checked' : 'unchecked' }
//                         // onPress={() => setChecked('therd')}
//                         />
//                         <Text style={{ fontSize: 12, color: "black" }}> Day 3</Text>

//                     </View>
//                     <View style={{ height: moderateScale(55), width: "15%", alignItems: "center", justifyContent: "center" }}>

//                         <RadioButton
//                         // value="four"
//                         // status={ checked === 'four' ? 'checked' : 'unchecked' }
//                         // onPress={() => setChecked('four')}
//                         />
//                         <Text style={{ fontSize: 12, color: "black" }}> Day 4</Text>

//                     </View>
//                     <View style={{ height: moderateScale(55), width: "15%", alignItems: "center", justifyContent: "center" }}>

//                         <RadioButton
//                         // value="four"
//                         // status={ checked === 'four' ? 'checked' : 'unchecked' }
//                         // onPress={() => setChecked('four')}
//                         />
//                         <Text style={{ fontSize: 12, color: "black" }}> Day 5</Text>
//                     </View>
//                     <View style={{ height: moderateScale(55), width: "15%", alignItems: "center", justifyContent: "center" }}>

//                         <RadioButton
//                         // value="four"
//                         // status={ checked === 'four' ? 'checked' : 'unchecked' }
//                         // onPress={() => setChecked('four')}
//                         />
//                         <Text style={{ fontSize: 12, color: "black" }}> Day 6</Text>

//                     </View>
//                 </View>


//             </View>
//             // </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         height: moderateScale(280),
//         top: scale(12), width: "100%", flexDirection: "column", justifyContent: "flex-end",
//     },
//     item: {
//         position: 'relative',
//         width: moderateScale(100),
//         height: moderateScale(100), // this is the diameter of circle
//         backgroundColor: "blue",
//         borderWidth: 1,
//         borderRadius: 55,
//         bottom: scale(65),
//         marginLeft: scale(120),

//     },
//     topItem: {
//         width: '100%',
//         height: moderateScale(120),
//         //  position: 'absolute',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: "#0097CE",
//         width: moderateScale(120),
//         borderRadius: scale(120),
//         top: scale(12)
//     },
//     text: {
//         color: '#fff',
//     },
//     TouchableOpacitystyle: {
//         height: moderateScale(300),
//         // backgroundColor:"red",
//         top: scale(12), width: "100%", flexDirection: "column", justifyContent: "flex-end",
//     },
//     contare1: {
//         height: moderateScale(120),
//         width: "100%", justifyContent: "center",
//         flexDirection: "row", alignItems: "center"

//     },
//     textstyle: {
//         fontSize: 24,
//         textAlign: "center",
//         // color: { color },
//         fontWeight: "500"

//     },
// });
