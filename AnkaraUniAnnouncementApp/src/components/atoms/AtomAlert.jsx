import { Alert } from "react-native";

export default function AtomAlert( title, message, arrayOfAlertBtnObjs, options ) {
    return Alert.alert(title, message, arrayOfAlertBtnObjs, options);
};
