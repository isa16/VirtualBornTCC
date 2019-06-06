import React, { Component } from 'react';
import ReactNativeAN from 'react-native-alarm-notification';

const fireDate = ReactNativeAN.parseDate(new Date(Date.now() + 1000));     // set the fire date for 1 second from now

//const fireDate = '05-06-2019 18:10:00';			  // set exact date time | Format: dd-MM-yyyy HH:mm:ss
 
const alarmNotifData = {
    id: "12345",                                  // Required
    title: "Seu bebe precisa de cuidados!!",        // Required
    message: "Entre e cuide dele.",           // Required
    channel: "12345",                     // Required. Same id as specified in MainApplication's onCreate method
    ticker: "My Notification Ticker",
    auto_cancel: true,                            // default: true
    vibrate: true,
    vibration: 100,                               // default: 100, no vibration if vibrate: false
    small_icon: "ic_launcher_round",                    // Required
    large_icon: "logo",
    play_sound: true,
    sound_name: "choro",                             // Plays custom notification ringtone if sound_name: null
    color: "red",
    schedule_once: true,                          // Works with ReactNativeAN.scheduleAlarm so alarm fires once
    tag: 'some_tag',
    fire_date: fireDate,                          // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.
 
    // You can add any additional data that is important for the notification
    // It will be added to the PendingIntent along with the rest of the bundle.
  	data: { foo: "bar" },
};

ReactNativeAN.scheduleAlarm(alarmNotifData);
 
export default class App extends Component {
 
    method(){
        //Schedule Future Alarm
        ReactNativeAN.scheduleAlarm(alarmNotifData);
 
        //Delete Scheduled Alarm
        ReactNativeAN.deleteAlarm("12345");
 
        //Stop Alarm
        ReactNativeAN.stopAlarm();
 
        //Send Local Notification Now
        ReactNativeAN.sendNotification(alarmNotifData);
 
        //Get All Scheduled Alarms
        ReactNativeAN.getScheduledAlarms().then(alarmNotif=>console.log(alarmNotif));
 
        //Clear Notification(s) From Notification Center/Tray
        ReactNativeAN.removeAllFiredNotifications()
        ReactNativeAN.removeFiredNotification("12345")
 
        //Removes Future Local Notifications
        ReactNativeAN.cancelAllNotifications()
        ReactNativeAN.cancelNotification("12345")
    }

}