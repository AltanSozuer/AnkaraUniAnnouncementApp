import { useState, useRef, useEffect, useContext } from "react"
import AnnouncementList from "../components/templates/AnnouncementList"
import { NotificationService } from "../services/NotificationService"
import { AxiosContext } from "../context/AxiosContext";

export default function Home({navigation}) {
    const [notificationList, setNotificationList] = useState([]);
    const currNotifListRef = useRef(notificationList)
    const { authAxios } = useContext(AxiosContext)
    const handleNotificationList = (newNotifList) => {
        setNotificationList(() => newNotifList);
    }

    useEffect(() => {
        const func = async () => {
            const payload = await new NotificationService(authAxios).getAllNotifications();
            handleNotificationList(payload)
        }
        func().catch(console.error)
    }, [currNotifListRef.current])
    return (
        <AnnouncementList navigation={navigation} 
            announcementList={notificationList} 
            handleAnnouncementList={handleNotificationList} />
    )
};
