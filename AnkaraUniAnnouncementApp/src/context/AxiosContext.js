import { useContext, createContext } from "react";
import axios from "axios";
import * as Keychain from 'react-native-keychain';
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { AuthContext } from "./AuthContext";

const AxiosContext = createContext(null);
const { Provider } = AxiosContext;

function AxiosProvider({ children }) {

    const authContext = useContext(AuthContext);

    const authAxios = axios.create({
        baseURL: 'http://192.168.1.37:8080'
    })

    const publicAxios = axios.create({
        baseURL: 'http://192.168.1.37:8080'
    })

    authAxios.interceptors.request.use((config) => {
        if(!config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${authContext.getAccessToken()}`;
        }
        return config;
    }, (error) => Promise.reject(error));

    const refreshAuthLogic = (failedRequest) => {
        const data = {
            refreshToken: authContext.authState.refreshToken
        }

        const options = {
            method: 'POST',
            url: 'http://192.168.1.37:8080/auth/refreshToken',
            data
        }

        return axios(options).then( async (tokenRefreshResponse) => {
            failedRequest.response.config.headers.Authorization = 'Bearer ' + tokenRefreshResponse.data.accessToken;

            authContext.setAuthState({
                ...authContext.authState,
                accessToken: tokenRefreshResponse.data.accessToken
            })

            await Keychain.setGenericPassword(
                'token',
                JSON.stringify({
                    accessToken: tokenRefreshResponse.data.accessToken,
                    refreshToken: authContext.authState.refreshToken
                })
            );
            return Promise.resolve();
        })
        .catch(error => {
            authContext.setAuthState({
                accessToken: null,
                refreshToken: null,
            });
        });
    }
    createAuthRefreshInterceptor(authAxios, refreshAuthLogic, {});

    return (
        <Provider value={{ authAxios, publicAxios }}>
            {children}
        </Provider>
    )
}


export {
    AxiosContext,
    AxiosProvider
}