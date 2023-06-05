import { StyleSheet } from "react-native";

const announcementDetailStyle = StyleSheet.create({
    container: {
        marginTop: 10
    },
    date: {
        width: 160,
        backgroundColor: "white",
        marginLeft: "auto",
        marginRight: 20,
        borderWidth: 2,
        borderColor: 'green'
    },
    title: { 
        fontSize: 30, 
        fontVariant: "bold", 
        marginVertical: 20, 
        marginHorizontal: 6 
    },
    content: { 
        marginHorizontal: 10 
    }

});

export default announcementDetailStyle;