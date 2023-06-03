import { useState, useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Button,
  } from 'react-native';
import * as Keychain from 'react-native-keychain';
import { AuthContext } from "../context/AuthContext";
import { AxiosContext } from "../context/AxiosContext";

export default function Login(params) {
    const [userInfoObj, setUserInfoObj] = useState({ email: '', password: '' })
    const authContext = useContext(AuthContext);
    const { publicAxios } = useContext(AxiosContext);

    const handleFormData = (name) => {
        return (newValue) => {
            setUserInfoObj( ( oldValue ) => ({ ...oldValue, [name]: newValue }))
        }
    }

    const onLogin = async () => {
        try {
            const response = await publicAxios.post('/login', userInfoObj);

            const { accessToken, refreshToken } = response.data;
            authContext.setAuthState({
                accessToken,
                refreshToken,
                isAuthenticated: true
            })

            await Keychain.setGenericPassword(
                'token',
                JSON.stringify({ accessToken, refreshToken }),
            );
        }
        catch(err) {
            // Add here and modal or alert that indicates login process is failed
            console.log('login failed: ', err);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.logo}>AUNotif</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#fefefe"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={handleFormData('email')}
              value={userInfoObj.email}
            />
    
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#fefefe"
              secureTextEntry
              onChangeText={handleFormData('password')}
              value={userInfoObj.password}
            />
          </View>
          <Button title="Login" style={styles.button} onPress={() => onLogin()} />
        </SafeAreaView>
      );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
    },
    logo: {
      fontSize: 60,
      color: '#fff',
      margin: '20%',
    },
    form: {
      width: '80%',
      margin: '10%',
    },
    input: {
      fontSize: 20,
      color: '#fff',
      paddingBottom: 10,
      borderBottomColor: '#fff',
      borderBottomWidth: 1,
      marginVertical: 20,
    },
    button: {},
  });