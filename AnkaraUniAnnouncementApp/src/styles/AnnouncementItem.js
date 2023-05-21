import { StyleSheet } from "react-native";

const announcementItemStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        shadowRadius: 10,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        borderWidth: 1
    },
    fromAvatar: {
        margin: 20
    },
    fromAvatarText: {
        fontSize: 16, 
        textAlign: "center"
    },
    contentContainer: {
        flex: 1
    },
    from: {
        // backgroundColor: "red",
        padding: 10
    },
    title: {
        // backgroundColor: "blue",
        fontSize: 20,
        padding: 10
    },
    date: {
        // backgroundColor: "green",
        textAlign: "right",
        marginRight: 5
    }
});

export default announcementItemStyle;