import { StyleSheet } from "react-native";

const loginPageStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
        color: 'black',
        paddingBottom: 10,
        borderBottomColor: 'green',
        borderBottomWidth: 1,
        borderRadius: 10,
        marginVertical: 20
    },
    loginBtn: {
        fontSize: 18,
        fontWeight: 300
    },
    registerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '40%'
    },
    registerBtn: {
        fontSize: 14,
        fontWeight: 300,
        borderWidth: 0
    },
    registerText: {
        fontSize: 14,
        fontWeight: 300,
    }
});

export default loginPageStyle;