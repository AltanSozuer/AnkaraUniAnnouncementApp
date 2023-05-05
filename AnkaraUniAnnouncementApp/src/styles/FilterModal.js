import { StyleSheet } from "react-native";

const filterModalStyle = StyleSheet.create({
    parentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginTop: 22
    },
    modal: {
        backgroundColor: "green",
        width: "100%",
        borderTopRightRadius: 90,
        borderTopLeftRadius: 90
    },
    titleContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    divider: {
        borderWidth: 2,
        borderColor: "gray",
        color: "gray",
        width: 40,
        margin: 10
    },
    mainTitle: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 20,
        margin: 10
    },
    selectGroupContainer: {
        backgroundColor: "red",
        margin: 10,
        padding: 10
    },
    selectWithTitleContainer: {
        marginBottom: 30
    },
    selectTitle: {
        fontSize: 16,
        marginBottom: 6
    },
    select: {
        textAlign: "left"
    },
    buttonContainer: {
        padding: 30
    },
    applyButton: {
        fontSize: 16
    }
    

});

export default filterModalStyle;