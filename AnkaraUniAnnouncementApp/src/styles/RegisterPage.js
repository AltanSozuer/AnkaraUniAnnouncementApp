import { StyleSheet } from "react-native";

const registerPageStyle = StyleSheet.create({
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
        fontSize: 18,
        fontWeight: 300
      },
      buttonTextStyle: {
        fontSize: 18,
        fontWeight: 300
      },
      inputStyle: {
        flex: 1,
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
      },
      loginSuccessText: {
          fontSize: 30,
          fontWeight: 300,
          marginVertical: '20%'
      }
});

export default registerPageStyle;