import { Text, View, useWindowDimensions } from "react-native"
import RenderHTML from "react-native-render-html";


export default function AnnouncementDetail({
    route
}) {
    const { notificationData } = route.params;
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 30, fontVariant: "bold", marginTop: 10, marginHorizontal: 6 }}>{notificationData.notificationTitle}</Text>
            <View style={{marginHorizontal: 10}}>
                <RenderHTML contentWidth={useWindowDimensions} source={{ html : notificationData.notificationContent }}  />
            </View>        
        </View>
    )    
};
