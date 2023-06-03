import { useState, useContext, useCallback, useEffect } from "react";
import * as Keychain from 'react-native-keychain';
import Splash from "../components/templates/Splash";
import { AuthContext } from "../context/AuthContext";

export default function SplashScreen() {
    const authContext = useContext(AuthContext);
    const [ status, setStatus ] = useState('loading');
    
    const loadTokens = useCallback( async () => {
        try {
            const payload = await Keychain.getGenericPassword();
            const tokens = JSON.parse(payload.password);

            authContext.setAuthState({
                accessToken: tokens.accessToken ||  null,
                refreshToken: tokens.refreshToken || null,
                isAuthenticated: tokens.accessToken !== null
            });

            setStatus('Success');
        }
        catch(err) {
            setStatus('error')
            console.log(`Keychain Error: ${err.message}`);
            authContext.setAuthState({
                accessToken: null,
                refreshToken: null,
                isAuthenticated: false,
            });
        }
    }, []);
    
    useEffect(() => {
        loadTokens()
    }, [loadTokens])

    return (
        <Splash isAuthenticated={authContext?.authState?.isAuthenticated} />
    )
};
