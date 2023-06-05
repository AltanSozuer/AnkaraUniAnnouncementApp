import { useState, createRef, useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import AtomView from "../components/atoms/AtomView";
import AtomText from "../components/atoms/AtomText";
import AtomImage from "../components/atoms/AtomImage";
import AtomScrollView from "../components/atoms/AtomScrollView";
import { KeyboardAvoidingView } from "react-native";
import AtomTextInput from "../components/atoms/AtomTextInput";
import AtomButton from "../components/atoms/AtomButton";
import { AxiosContext } from "../context/AxiosContext";
import registerPageStyle from "../styles/RegisterPage";

export default function Register() {
    const navigation = useNavigation();
    const [ userInfoObj, setUserInfoObj ] = useState({ name: '', surname: '', email: '', password: '', passwordVerify: '' })
    const [ loading, setLoading ] = useState(false);
    const [ errorText, setErrorText ] = useState("");
    const [ isRegistrationSuccess, setIsRegistrationSuccess ] = useState(false);
    
    const { publicAxios } = useContext(AxiosContext);

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

    const onRegister = async () => {
        const response = await publicAxios.post('/register', userInfoObj);
        return { data: response?.data, status: response?.status};
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
        
        setLoading(() => true);
        
        onRegister().then((responseJson) => {
            setLoading(() => false);
            console.log('responseJson: ',responseJson);

            // If server response status 201
            if (responseJson.status === 201) {
                setIsRegistrationSuccess(true);
                console.log(
                    'Registration Successful. Please Login to proceed'
                );
            } 
            else {
                setErrorText(() => responseJson.msg);
            }
        })
        .catch((error) => {
            setLoading(() => false);
            console.error(error);
            alert('Register is failed. Please try again.');
            return;
        });
    };
    if(isRegistrationSuccess) {
            return (
                <AtomView style={{flex: 1,backgroundColor: 'white', alignItems: "center",justifyContent: 'center' }}>
                    <AtomImage source={require("../../assets/complete.png")} 
                        style={{ width: 200, height: 200, marginVertical: '10%', marginHorizontal: '20%'}}/>
                    <AtomText text={'Registration Success'} style={registerPageStyle.loginSuccessText} />
                    <AtomButton title={'Login'} 
                        mode={"elevated"}
                        buttonColor={"white"}
                        textColor={"green"}
                        style={registerPageStyle.buttonStyle}
                        onPress={() => navigation.replace('Login')} />
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
                        <AtomView style={registerPageStyle.SectionStyle}>
                            <AtomTextInput
                                style={registerPageStyle.inputStyle}
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
                        <AtomView style={registerPageStyle.SectionStyle}>
                            <AtomTextInput
                                style={registerPageStyle.inputStyle}
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
                        <AtomView style={registerPageStyle.SectionStyle}>
                            <AtomTextInput
                                style={registerPageStyle.inputStyle}
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
                        <AtomView style={registerPageStyle.SectionStyle}>
                            <AtomTextInput
                                style={registerPageStyle.inputStyle}
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
                        <AtomView style={registerPageStyle.SectionStyle}>
                            <AtomTextInput
                                style={registerPageStyle.inputStyle}
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

                        { errorText || errorText?.length ? (
                            alert(errorText)
                        ) : null}
                        <AtomButton title={'Register'}
                            styleContainer={registerPageStyle.buttonStyle}
                            style={registerPageStyle.buttonTextStyle}
                            mode={"elevated"}
                            loading={loading}
                            buttonColor={"white"}
                            textColor={"green"} 
                            onPress={handleSubmitButton} />

                        <AtomView style={registerPageStyle.loginContainer}>
                            <AtomText text={'Joined us before?'} style={registerPageStyle.loginText} />
                            <AtomButton title={'Login'}
                                styleContainer={registerPageStyle.loginBtn}
                                style={registerPageStyle.loginText}
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
