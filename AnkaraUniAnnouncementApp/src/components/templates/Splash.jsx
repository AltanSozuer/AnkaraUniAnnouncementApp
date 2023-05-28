import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import AtomView from '../atoms/AtomView';
import AtomImage from '../atoms/AtomImage';

export default function Splash() {
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimate(() => false)
        }, 4000)
    }, [])

    return (
        <AtomView>
            <AtomImage source={require("../../../assets/splash.png")} />
            <ActivityIndicator animating={animate}
                color={"#FFFFFF"}
                size={"large"} />
        </AtomView>
    )
};
