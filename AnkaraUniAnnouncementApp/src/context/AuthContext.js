import { useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext(null);
const { Provider } = AuthContext;

function AuthProvider({ children }) {
    const [ authState, setAuthState ] = useState({
        accessToken: null,
        refreshToken: null,
        isAuthenticated: null
    })

    const logout = async () => {
        await AsyncStorage.clear();
        setAuthState({ accessToken: null, refreshToken: null, isAuthenticated: false });
    }

    const getAccessToken = () => {
        return authState.accessToken;
    }

    return (
        <Provider value={{ authState, setAuthState, getAccessToken, logout}}>
            {children}
        </Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}