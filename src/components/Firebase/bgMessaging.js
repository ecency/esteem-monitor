import firebase from 'react-native-firebase';

import type { RemoteMessage } from 'react-native-firebase';

export default async (message: RemoteMessage) => {
    const { title, body } = message;
    showAlert(title, body);
    return Promise.resolve();
};
const showAlert =(title, body)=> {
    Alert.alert(
        title, body,
        [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
    );
};