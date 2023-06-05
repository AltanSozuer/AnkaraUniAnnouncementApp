import { useState, useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/AuthContext";
import { AxiosContext } from "../context/AxiosContext";
import AtomImage from "../components/atoms/AtomImage";
import AtomButton from "../components/atoms/AtomButton";
import AtomText from "../components/atoms/AtomText";
import loginPageStyle from "../styles/LoginPage";
import AtomSafeAreaView from "../components/atoms/AtomSafeAreaView";
import AtomView from "../components/atoms/AtomView";
import AtomTextInput from "../components/atoms/AtomTextInput";

export default function Login() {
    const navigation = useNavigation()
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

            await AsyncStorage.setItem(
              'token',
              JSON.stringify({ accessToken, refreshToken })
            )

            navigation.replace('MainAppRoutes')
        }
        catch(err) {
            console.log('login failed: ', err);
            alert('Login is failed. Please try again.');
            return;
        }
    }

    const onRegister = () => {
      navigation.replace('Register')
    }

    return (
        <AtomSafeAreaView style={loginPageStyle.container}>
          <AtomImage source={require("../../assets/aunotif_logo.png")} 
            style={{ width: 200, height: 100, marginVertical: '20%', marginHorizontal: '20%'}}/>
          <AtomView style={loginPageStyle.form}>
            <AtomTextInput
              style={loginPageStyle.input}
              placeholder="Email"
              placeholderTextColor="gray"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={handleFormData('email')}
              value={userInfoObj.email}
            />
    
            <AtomTextInput
              style={loginPageStyle.input}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
              onChangeText={handleFormData('password')}
              value={userInfoObj.password}
            />
          </AtomView>
          <AtomButton title="Login"
            style={loginPageStyle.loginBtn}
            mode={"elevated"}
            buttonColor={"white"}
            textColor={"green"} 
            onPress={() => onLogin()} />

          <AtomView style={loginPageStyle.registerContainer}>
            <AtomText text={'Not a member? '} style={loginPageStyle.registerText} />
            <AtomButton title="Register now"
              style={loginPageStyle.registerBtn}
              mode={"text"}
              buttonColor={"white"}
              textColor={"green"} 
              onPress={() => onRegister()} />
          </AtomView>
        </AtomSafeAreaView>
      );
};

//     container: {
//       flex: 1,
//       backgroundColor: 'white',
//       alignItems: 'center',
//       justifyContent: 'flex-start',
//       width: '100%',
//     },
//     logo: {
//       fontSize: 60,
//       color: '#fff',
//       margin: '10%',
//     },
//     form: {
//       width: '80%',
//       margin: '10%',
//     },
//     input: {
//       fontSize: 20,
//       color: 'black',
//       paddingBottom: 10,
//       borderBottomColor: 'green',
//       borderBottomWidth: 1,
//       borderRadius: 10,
//       marginVertical: 20
//     },
//     loginBtn: {
//       fontSize: 18,
//       fontWeight: 300
//     },
//     registerContainer: {
//       flex: 1,
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginTop: '40%'
//     },
//     registerBtn: {
//       fontSize: 14,
//       fontWeight: 300,
//       borderWidth: 0
//     },
//     registerText: {
//       fontSize: 14,
//       fontWeight: 300,
//     }

//   });