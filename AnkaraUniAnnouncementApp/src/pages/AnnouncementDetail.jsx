import { Text, View, useWindowDimensions } from "react-native"
import RenderHTML from "react-native-render-html";


export default function AnnouncementDetail({
    route,
    navigate
}) {
    const { itemId, content } = route.params;
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>AnnouncementDetail Page</Text>
            <Text>Item id: {itemId}</Text>
            <RenderHTML contentWidth={useWindowDimensions} source={{ html : content }}  />        
        </View>
    )    
};
