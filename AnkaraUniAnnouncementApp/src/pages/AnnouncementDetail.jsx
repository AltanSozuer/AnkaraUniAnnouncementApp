import { Text, View, useWindowDimensions } from "react-native"
import AtomChip from "../components/atoms/AtomChip";
import { formatDate } from "../utils/DateManipulation";
import RenderHTML from "react-native-render-html";


export default function AnnouncementDetail({
    route
}) {
    const { notificationData } = route.params;
    return (
        <View style={{ flex: 1 }}>
            <AtomChip icon={"clock-time-three-outline"}
                mode={"flat"}
                style={{
                    width: 160,
                    backgroundColor: "grey",
                    justifyContent: "center"
                }}
                rippleColor={"blue"}
                children={formatDate(notificationData.date)} />
            <Text style={{ fontSize: 30, fontVariant: "bold", marginVertical: 10, marginHorizontal: 6 }}>{notificationData.notificationTitle}</Text>
            <View style={{marginHorizontal: 10}}>
                <RenderHTML contentWidth={useWindowDimensions} source={{ html : notificationData.notificationContent }}  />
            </View>
                  
        </View>
    )    
};
