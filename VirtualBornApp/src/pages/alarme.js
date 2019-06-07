import React, { Component } from 'react';
import ReactNativeAN from 'react-native-alarm-notification';

const fireDate = ReactNativeAN.parseDate(new Date(Date.now() + 1000));    

//const fireDate = '06-06-2019 19:51:00';			  

const alarmNotifData = {
    id: "12345",                                  
    title: "Seu bebe precisa de cuidados!!",        
    message: "Clique no nome dele para ouvir o choro.",           
    channel: "12345",                   
    ticker: "My Notification Ticker",
    auto_cancel: true,                            
    vibrate: true,
    vibration: 100,                               
    small_icon: "ic_launcher_round",                  //icone de cima
    large_icon: "logo",                               //icone do lado
    play_sound: false,                                //nao tocar o alarme
    color: "red",
    schedule_once: true,                          // Works with ReactNativeAN.scheduleAlarm so alarm fires once
    tag: 'some_tag',
    fire_date: fireDate,              
  	data: { foo: "bar" },
};

ReactNativeAN.scheduleAlarm(alarmNotifData);
 
export default class App extends Component {
 
    method(){
        //Schedule Future Alarm
       // ReactNativeAN.scheduleAlarm(alarmNotifData);
 
        //Send Local Notification Now
        ReactNativeAN.sendNotification(alarmNotifData);
 
        //Get All Scheduled Alarms
        //ReactNativeAN.getScheduledAlarms().then(alarmNotif=>console.log(alarmNotif));
 
        //Clear Notification(s) From Notification Center/Tray
        ReactNativeAN.removeAllFiredNotifications()
        ReactNativeAN.removeFiredNotification("12345")
 
        //Removes Future Local Notifications
        ReactNativeAN.cancelAllNotifications()
        ReactNativeAN.cancelNotification("12345")
    }

}