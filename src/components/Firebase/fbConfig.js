import firebase from 'react-native-firebase';
import {AsyncStorage} from "react-native";


const  checkPermission = async ()=>{
    try {
        const enabled = await firebase.messaging().hasPermission();
        if (enabled) {
            getToken();
        } else {
            requestPermission();
        }
    }catch (e) {
        alert("fcmError Getting Token",e)
    }
};
const requestPermission  = async ()=> {
    try {
        await firebase.messaging().requestPermission();
        getToken();
    } catch (error) {
        alert(error)
    }
};
const getToken = async ()=> {
    try{
        let fcmToken = await AsyncStorage.getItem('fcmToken');
        if (!fcmToken) {
            fcmToken = await firebase.messaging().getToken();
            if (fcmToken) {
                await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        }
    }
    catch (e) {
        alert('error for getting token',e)
    }
};
const createNotificationListeners = async ()=>{
    notificationListener();
    notificationOpenedListener();
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
        const { title, body } = notificationOpen.notification;
        showAlert(title, body);
    }
};

const notificationListener =firebase.notifications().onNotification((notification) => {
    const { title, body } = notification;
    showAlert(title, body);
});
const notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
    const { title, body } = notificationOpen.notification;
    showAlert(title, body);
});
const showAlert =(title, body)=> {
    Alert.alert(
        title, body,
        [
            { text: 'OK', onPress: () => alert(title, body) },
        ],
        { cancelable: false },
    );
};
export {checkPermission, createNotificationListeners, getToken};