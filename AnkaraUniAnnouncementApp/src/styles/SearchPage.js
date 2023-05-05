import { StyleSheet } from "react-native";

const searchPageStyle = StyleSheet.create({
    parent: {
        backgroundColor: "white",
        height: "100%",
        flexDirection: "column",
    },
    searchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 12,
        padding: 12,
    },
    textInput: {
        height: 50,
        width: 300,
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
    },
    filterButton: {
        height: 40,
        width: 40,
        borderRadius: 10
    },
    announceItemsContainer: {
        backgroundColor: "red",
        margin: 15,
        padding: 10
    },
    announceItem: {

    }
    

});

export default searchPageStyle;