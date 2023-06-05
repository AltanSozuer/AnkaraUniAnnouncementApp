import { useState, useEffect, useContext } from "react"
import { useNavigation } from '@react-navigation/native';
import FormWithImage from "../components/templates/FormWithImage"
import AtomView from "../components/atoms/AtomView"
import AtomIconButton from "../components/atoms/AtomIconButton"
import { AxiosContext } from "../context/AxiosContext"
import { AuthContext } from "../context/AuthContext"
import UserService from "../services/UserService"
import LogoutDialog from "../components/templates/LogoutDialog"
import SAMPLE_PERSON from "../constants/SamplePersonInfo"


export default function Profile() {
    const [isLogoutDialogVisible, setLogoutDialogVisible] = useState(false);
    const [data, setProfileData] = useState(SAMPLE_PERSON)
    const { authAxios } = useContext(AxiosContext);
    const { authState ,logout } = useContext(AuthContext);
    const navigation = useNavigation()
    
    
    const handleProfileData = (name) => {
        return (newValue) => {
            setProfileData( ( oldValue ) => ({ ...oldValue, [name]: newValue }))
        }
    }

    const onLogout = async () => {
        try {
            // const response = await authAxios.delete('/logout', {refreshToken: authState?.refreshToken });
            // console.log('onLogout response: ', response.status);

            await logout(),
            navigation.replace('Auth')
            // if(response.status === 200){
            // }

        }
        catch(err) {
            console.log('logout failed: ', err);
            alert('logout is failed. Please try again.');
            return;
        }
    }
    // useEffect(() => {
    //     const getUserInfo = async () => {
    //         const userData =  new UserService(authAxios).getUserInfo();
    //         setProfileData(() => userData);
    //     }
    //     getUserInfo().catch(console.error)
    // }, [])

    return (
        <AtomView>
            <AtomIconButton iconName={"logout"}
                mode={"outlined"}
                iconColor={"green"}
                containerColor={"white"}
                style={{
                    marginLeft: "auto"
                }}
                disabled={false}
                size={25}
                onPress={() => setLogoutDialogVisible(() => true)} />                
            <FormWithImage data={data} onChangeData={handleProfileData} />
            {
                isLogoutDialogVisible 
                ? <LogoutDialog handleLogOut={onLogout} 
                    setVisible={setLogoutDialogVisible} 
                    visible={isLogoutDialogVisible} /> 
                : null
            }
        </AtomView>
    )
};
