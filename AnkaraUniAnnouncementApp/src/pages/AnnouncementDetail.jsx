import { useWindowDimensions } from "react-native"
import AtomChip from "../components/atoms/AtomChip";
import { formatDate } from "../utils/DateManipulation";
import RenderHTML from "react-native-render-html";
import AtomText from "../components/atoms/AtomText";
import AtomButton from "../components/atoms/AtomButton";
import AtomView from "../components/atoms/AtomView";
import announcementDetailStyle from "../styles/AnnouncementDetail";
import AtomScrollView from "../components/atoms/AtomScrollView";

export default function AnnouncementDetail({
    route
}) {
    const { notificationData } = route.params;
    const { width } = useWindowDimensions();
    return (
        <AtomView style={announcementDetailStyle.container}>
            <AtomChip 
            icon={"clock-time-three-outline"}
                mode={"flat"}
                style={announcementDetailStyle.date}
                rippleColor={"blue"}
                children={formatDate(notificationData.date)} />
            <AtomText text={notificationData.notificationTitle} style={announcementDetailStyle.title} />
            <AtomScrollView style={announcementDetailStyle.content}>
                <RenderHTML contentWidth={width} 
                    source={{ html: notificationData.notificationContent }} />
            </AtomScrollView>
            <AtomView style={{ marginTop: 20 }}>
                <AtomButton title={'For more details'} 
                    buttonColor={'green'} 
                    textColor={'white'} 
                    onPress={() => window.open(notificationData.link, '_blank', 'noreferrer')} />
            </AtomView>

        </AtomView>
    )
};
