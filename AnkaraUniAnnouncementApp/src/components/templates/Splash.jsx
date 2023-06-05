import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AtomView from '../atoms/AtomView';
import AtomImage from '../atoms/AtomImage';

export default function Splash({
    isAuthenticated
}) {
    const navigation = useNavigation()
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimate(() => false);
            navigation.replace(
                isAuthenticated ? 'MainAppRoutes' : 'Auth'
            )  
            // navigation.replace('MainAppRoutes')
        }, 4000)
    }, [])

    return (
        <AtomView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <AtomImage source={require("../../../assets/aunotif_logo.png")} style={{ width: 300, height: 200}}/>
            <ActivityIndicator animating={animate}
                color={"green"}
                size={"large"} />
        </AtomView>
    )
};
