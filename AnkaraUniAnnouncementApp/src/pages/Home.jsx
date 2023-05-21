import { useState, useRef, useEffect } from "react"
import AnnouncementList from "../components/templates/AnnouncementList"
import { Notification } from "../services/Notification"
import { FACULTY_DOMAINS } from "../constants/FacultyDomains"

export default function Home({navigation}) {
    const [notificationList, setNotificationList] = useState([]);
    const currNotifListRef = useRef(notificationList)
    const handleNotificationList = (newNotifList) => {
        console.log('handleNotificationList: ',newNotifList);
        setNotificationList(() => newNotifList);
    }

    useEffect(() => {
        const func = async () => {
            const payload = await new Notification().getAllNotifications();
            handleNotificationList(payload.data.data)
        }
        func().catch(console.error)
    }, [currNotifListRef.current])
    return (
        <AnnouncementList navigation={navigation} 
            announcementList={notificationList} 
            handleAnnouncementList={handleNotificationList} />
    )
};
