import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import PushNotification from "react-native-push-notification";

PushNotification.configure({
    requestPermissions: Platform.OS === 'ios',
  
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
      // (required) Called when a remote is received or opened, or local notification is opened
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
  });
  
  PushNotification.createChannel(
    {
      channelId: 'DemoAppID', // (required)
      channelName: 'DemoApp', // (required)
    },
    created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );


const App = () => {

  function setRepeatingNotification(interval){
    PushNotification.cancelAllLocalNotifications()
    if (interval == "every 30 seconds") {
      PushNotification.localNotificationSchedule({
        title: "My notification title",
        message: "My notification message",
        date: new Date(Date.now() + 30 * 1000), // first trigger in 30 secs
        channelId: 'DemoAppID',
        repeatType: 'time',
        repeatTime: 30 * 1000 // repeats every 30 seconds (value has to be defined in miliseconds when the repeatType is 'time')
      });
      Alert.alert("Successful!", "Your notification is coming in 30 seconds and will repeat itself every 30 seconds.")
    }
    else if (interval == "once in two days") {
      PushNotification.localNotificationSchedule({
        title: "My notification title",
        message: "My notification message",
        date: new Date(Date.now() + 10 * 1000), // first trigger in 10 secs
        channelId: 'DemoAppID',
        repeatType: 'day',
        repeatTime: 2, // repeats every 2 days
      });
      Alert.alert("Successful!", "Your notification is coming in 10 seconds and will repeat itself once in two days.")
    }
    else if (interval == "once a week") {
      PushNotification.localNotificationSchedule({
        title: "My notification title",
        message: "My notification message",
        date: new Date(Date.now() + 10 * 1000), // first trigger in 10 secs
        channelId: 'DemoAppID',
        repeatType: 'week',
        repeatTime: 1 // repeats every week
      });
      Alert.alert("Successful!", "Your notification is coming in 10 seconds and will repeat itself every week.")
    }
  }

  return (
    <SafeAreaView style={styles.backgroundStyle}>

      <StatusBar barStyle='dark-content' backgroundColor='white'/>

      <TouchableOpacity style={styles.primaryButton} onPress={()=>{setRepeatingNotification("every 30 seconds")}}>
        <Text>every 30 seconds</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.primaryButton} onPress={()=>{setRepeatingNotification("once in two days")}}>
        <Text>once in two days</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.primaryButton} onPress={()=>{setRepeatingNotification("once a week")}}>
        <Text>once a week</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={()=>{PushNotification.cancelAllLocalNotifications()}}>
        <Text>cancel all notifications</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle:{
    backgroundColor:'white',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  primaryButton:{
    padding:5,
    backgroundColor:'#CDF2CA',
    borderRadius:5,
    margin:10
  },
  secondaryButton:{
    padding:5,
    backgroundColor:'#ffc2c2',
    borderRadius:5,
    margin:10
  }
});

export default App;
