import { StyleSheet } from "react-native";

const formWithImageStyle = StyleSheet.create({
    parentContainer: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        margin: 20
    },
    scrollContainer: {
        width: "100%",
        height: "100%"
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 15
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20
    },
    imageTitle: {
        color: "black",
        fontSize: 30,
        fontWeight: 500
    },
    infoTitle: {
        color: "gray",
        fontSize: 15,
        marginVertical: 10
    },
    inputGroupContainer: {
        width: "100%",
        marginBottom: 70
    },
    inputItemContainer: {
        paddingVertical: 20
    },
    inputStyle: {
        paddingLeft: 16,
        height: 30,
        marginTop: 10,
        borderRadius: 5,
        shadowRadius: 5,
        borderWidth: 0.4
    },
    inputTextStyle: {
        
    },
    button: {
        margin: 40
    }
    

});

export default formWithImageStyle;