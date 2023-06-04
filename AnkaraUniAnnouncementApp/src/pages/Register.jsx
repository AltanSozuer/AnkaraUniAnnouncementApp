import { useState, createRef } from "react";
import { HelperText } from "react-native-paper";
import { UserWithPass } from "../models/User";
import AtomView from "../components/atoms/AtomView";
import AtomText from "../components/atoms/AtomText";
import AtomImage from "../components/atoms/AtomImage";
import AtomTouchableOpacity from "../components/atoms/AtomTouchableOpacity";
import AtomScrollView from "../components/atoms/AtomScrollView";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import AtomTextInput from "../components/atoms/AtomTextInput";
import AtomButton from "../components/atoms/AtomButton";
import { useNavigation } from '@react-navigation/native';


export default function Register(params) {
    const navigation = useNavigation();
    const [ userInfoObj, setUserInfoObj ] = useState({ name: '', surname: '', email: '', password: '', passwordVerify: '' })
    const [ loading, setLoading ] = useState(false);
    const [ errorText, setErrorText ] = useState("");
    const [ isRegistrationSuccess, setIsRegistrationSuccess ] = useState(false);
    
    const nameInputRef = createRef();
    const surnameInputRef = createRef();
    const emailInputRef = createRef();
    const passwordInputRef = createRef();

    const handleFormData = (name) => {
        return (newValue) => {
            setUserInfoObj( ( oldValue ) => ({ ...oldValue, [name]: newValue }))
        }
    }

    const onClickLoginPage = () => {
        navigation.replace('Login')
    }

    const handleSubmitButton = () => {
        setErrorText(() => '');
        if (!userInfoObj.name) {
            alert('Please fill name');
            return;
        }
        if (!userInfoObj.surname) {
            alert('Please fill surname');
            return;
            }
        if (!userInfoObj.email) {
            alert('Please fill Email');
            return;
        }
        if (!userInfoObj.password) {
            alert('Please fill password');
            return;
        }
        //Show Loader
        setLoading(true);
        const userData = new UserWithPass({
            name: userInfoObj.name,
            surname: userInfoObj.surname,
            email: userInfoObj.email,
            password: userInfoObj.password,
        });
        
        // var formBody = [];
        // for (const key in dataToSend) {
        // var encodedKey = encodeURIComponent(key);
        // var encodedValue = encodeURIComponent(dataToSend[key]);
        // formBody.push(encodedKey + '=' + encodedValue);
        // }
        // formBody = formBody.join('&');

        // fetch('http://localhost:3000/api/user/register', {
        // method: 'POST',
        // body: formBody,
        // headers: {
        //     //Header Defination
        //     'Content-Type':
        //     'application/x-www-form-urlencoded;charset=UTF-8',
        // },
        // })
        // .then((response) => response.json())
        // .then((responseJson) => {
        //     //Hide Loader
        //     setLoading(false);
        //     console.log(responseJson);
        //     // If server response message same as Data Matched
        //     if (responseJson.status === 'success') {
        //     setIsRegistrationSuccess(true);
        //     console.log(
        //         'Registration Successful. Please Login to proceed'
        //     );
        //     } else {
        //     setErrorText(() => responseJson.msg);
        //     }
        // })
        // .catch((error) => {
        //     //Hide Loader
        //     setLoading(false);
        //     console.error(error);
        // });
    };
    if(isRegistrationSuccess) {
            return (
                <AtomView style={{flex: 1,backgroundColor: 'white',justifyContent: 'center' }}>
                    <AtomImage source={require("../../assets/aunotif_logo.png")} 
                        style={{ width: 200, height: 100, marginVertical: '20%', marginHorizontal: '20%'}}/>
                    <AtomText text={'Registration Success'} />
                    {
                    // <AtomTouchableOpacity
                    //     style={styles.buttonStyle}
                    //     activeOpacity={0.5}
                    //     onPress={() => props.navigation.navigate('LoginScreen')}>
                    //     <Text style={styles.buttonTextStyle}>Login Now</Text>
                    // </AtomTouchableOpacity>
                    }
                </AtomView>
            )
        }
        return (
            <AtomView style={{flex: 1, backgroundColor: 'white'}}>
                <AtomScrollView keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                    justifyContent: 'center',
                    alignContent: 'center' }}>
                    <AtomView style={{alignItems: 'center'}}>
                        <AtomImage source={require('../../assets/aunotif_logo.png')}
                            style={{
                                width: '50%',
                                marginTop: '15%',
                                height: 150,
                                resizeMode: 'contain',
                                alignSelf: 'center'
                            }} />
                    </AtomView>
                    <KeyboardAvoidingView enabled>
                        <AtomView style={styles.SectionStyle}>
                            <AtomTextInput
                                style={styles.inputStyle}
                                onChangeText={handleFormData('name')}
                                underlineColorAndroid="#f000"
                                placeholder="Enter Name"
                                placeholderTextColor="#8b9cb5"
                                autoCapitalize="sentences"
                                returnKeyType="next"
                                onSubmitEditing={() =>
                                    surnameInputRef.current && surnameInputRef.current.focus()
                                }
                                blurOnSubmit={false} />
                            
                        </AtomView>
                        <AtomView style={styles.SectionStyle}>
                            <AtomTextInput
                                style={styles.inputStyle}
                                onChangeText={handleFormData('surname')}
                                underlineColorAndroid="#f000"
                                placeholder="Enter Surname"
                                placeholderTextColor="#8b9cb5"
                                keyboardType="default"
                                ref={surnameInputRef}
                                returnKeyType="next"
                                onSubmitEditing={() =>
                                    emailInputRef.current &&
                                    emailInputRef.current.focus()
                                }
                                blurOnSubmit={false} />
                        </AtomView>
                        <AtomView style={styles.SectionStyle}>
                            <AtomTextInput
                                style={styles.inputStyle}
                                onChangeText={handleFormData('email')}
                                underlineColorAndroid="#f000"
                                placeholder="Enter Email"
                                placeholderTextColor="#8b9cb5"
                                ref={emailInputRef}
                                returnKeyType="next"
                                secureTextEntry={true}
                                keyboardType={'email-address'}
                                onSubmitEditing={() =>
                                    passwordInputRef.current &&
                                    passwordInputRef.current.focus()
                                }
                                blurOnSubmit={false} />
                            
                        </AtomView>
                        <AtomView style={styles.SectionStyle}>
                            <AtomTextInput
                                style={styles.inputStyle}
                                onChangeText={handleFormData('password')}
                                underlineColorAndroid="#f000"
                                placeholder="Enter Password"
                                placeholderTextColor="#8b9cb5"
                                keyboardType="default"
                                ref={passwordInputRef}
                                returnKeyType="next"
                                secureTextEntry={true}
                                blurOnSubmit={false} />
                        </AtomView>
                        <AtomView style={styles.SectionStyle}>
                            <AtomTextInput
                                style={styles.inputStyle}
                                onChangeText={handleFormData('passwordVerify')}
                                underlineColorAndroid="#f000"
                                placeholder="Enter Password Again"
                                placeholderTextColor="#8b9cb5"
                                keyboardType="default"
                                ref={passwordInputRef}
                                returnKeyType="next"
                                secureTextEntry={true}
                                blurOnSubmit={false} />
                        </AtomView>

                        { errorText !== '' ? (
                            <Text style={styles.errorTextStyle}>
                            {errorText}
                            </Text>
                        ) : null}
                        <AtomButton title={'Register'}
                            styleContainer={styles.buttonStyle}
                            style={styles.buttonTextStyle}
                            mode={"elevated"}
                            buttonColor={"white"}
                            textColor={"green"} 
                            onPress={handleSubmitButton} />

                        <AtomView style={styles.loginContainer}>
                            <AtomText text={'Joined us before?'} style={styles.loginText} />
                            <AtomButton title={'Login'}
                                styleContainer={styles.loginBtn}
                                style={styles.loginText}
                                mode={"text"}
                                buttonColor={"white"}
                                textColor={"green"} 
                                onPress={onClickLoginPage} />
                        </AtomView>
                            
                    </KeyboardAvoidingView>
                </AtomScrollView>
            </AtomView>
        )
};

const styles = StyleSheet.create({
    SectionStyle: {
      flexDirection: 'column',
      height: 40,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
    },
    buttonStyle: {
      marginHorizontal: 35,
      borderWidth: 1,
      borderColor: '#ebedeb',
      marginTop: 20,
    //   marginBottom: 20,
      fontSize: 18,
      fontWeight: 300
    },
    buttonTextStyle: {
      fontSize: 18,
      fontWeight: 300
    },
    inputStyle: {
      flex: 1,
    //   color: 'white',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: '#dadae8',
    },
    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 14,
    },
    successTextStyle: {
      color: 'white',
      textAlign: 'center',
      fontSize: 18,
      padding: 30,
    },
    loginContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 35,
        marginTop: 60
    },
    loginBtn: {
        fontSize: 14,
        fontWeight: 300,
        borderWidth: 0
    },
    loginText: {
        fontSize: 14,
        fontWeight: 300,
    }
  });