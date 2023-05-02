import { Text, View } from "react-native"

export default function AnnouncementDetail({
    route,
    navigate
}) {
    const { itemId } = route.params;
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>AnnouncementDetail Page</Text>
            <Text>Item id: {itemId}</Text>
        </View>
    )    
};
