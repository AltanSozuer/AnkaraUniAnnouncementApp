import { useState, useEffect, useRef } from "react";
import AtomIconButton from "../components/atoms/AtomIconButton";
import TextInputEle from "../components/organism/TextInputEle";
import AtomView from "../components/atoms/AtomView";
import searchPageStyle from "../styles/SearchPage";
import AnnouncementList from "../components/templates/AnnouncementList";
import AnnouncementSkeletonGroup from "../components/organism/AnnouncementSkeletonGroup";
import FilterModal from "../components/templates/FilterModal";
import { NotificationService } from "../services/NotificationService";
import { subtractGivenAmountOfTimeToNow } from "../utils/DateManipulation";
import NoSearchResults from "../components/organism/NoSearchResults";
import FiltersSection from "../components/organism/FiltersSection";

export default function Search({ navigation }) {
    const [filterModalVisible, setFilterModalVisible] = useState(false)
    const [notificationList, setNotificationList] = useState([]);
    const [selectedFacultyNames, setSelectedFacultyNames] = useState(undefined);
    const [selectedTimePeriod, setSelectedTimePeriod] = useState(undefined)
    const [searchText, setSearchText] = useState("");
    const currNotifListRef = useRef(notificationList)

    const handleSearchText = (newSearchText) => {
        setSearchText(() => newSearchText);
    }

    const handleSelectedFacultyNames = (newFacultyList) => {
        setSelectedFacultyNames(() => [newFacultyList]);
    }

    const clearSelectedFacultyNames = () => {
        setSelectedFacultyNames(() => undefined) 
    }

    const clearSelectedTimePeriod = () => {
        setSelectedTimePeriod(() => undefined) 
    }

    const handleSelectedTimePeriod = (newTimePeriod) => {
        setSelectedTimePeriod(() => newTimePeriod);
    }

    const clearFilters = () => {
        clearSelectedFacultyNames()
        handleSelectedTimePeriod(undefined)
    }

    const handleNotificationList = (newNotifList) => {
        setNotificationList(() => newNotifList);
    }

    const isThereAnyFilterApplied = () => {
        return selectedFacultyNames || selectedTimePeriod
    }


    const getNotifications = async () => {
        const notifList = await new NotificationService().getAllNotifications({
            facultyList: selectedFacultyNames, 
            timeUntil: selectedTimePeriod && subtractGivenAmountOfTimeToNow(selectedTimePeriod)
        })
        handleNotificationList(notifList);
    }

    useEffect(() => {
        const getNotifsWithFilters = async () => {
            const payload = await new NotificationService().getAllNotifications({ 
                facultyList: selectedFacultyNames, 
                timeUntil: selectedTimePeriod && subtractGivenAmountOfTimeToNow(selectedTimePeriod), 
                searchText: searchText });
            // const payload = await new NotificationService().getAllNotifications();
            handleNotificationList(payload)
        }
        getNotifsWithFilters().catch(console.error)
    }, [currNotifListRef.current , searchText, selectedFacultyNames, selectedTimePeriod])

    return (
        <AtomView style={searchPageStyle.parent}>
            <AtomView style={searchPageStyle.searchContainer}>
                <TextInputEle style={searchPageStyle.textInput}
                    editable={true}
                    placeholder={"Search announcement"}
                    onChangeText={handleSearchText}
                    value={searchText} />
                <AtomIconButton iconName={"filter-variant"}
                    mode={"contained"}
                    iconColor={"white"}
                    containerColor={"green"}
                    style={searchPageStyle.filterButton}
                    disabled={false}
                    size={20}
                    onPress={() => setFilterModalVisible(true)} />
            </AtomView>
            { isThereAnyFilterApplied && 
                <AtomView>
                    <FiltersSection 
                        selectedFacultyNames={selectedFacultyNames}
                        selectedTimePeriod={selectedTimePeriod}
                        clearSelectedFacultyNames={clearSelectedFacultyNames}
                        clearSelectedTimePeriod={clearSelectedTimePeriod} />
                </AtomView>
            }
            { notificationList?.length 
            ? <AnnouncementList navigation={navigation} announcementList={notificationList} />
            : <NoSearchResults />
            
            // : <AnnouncementSkeletonGroup itemCount={6} containerStyle={{ margin: 15, padding: 10 }}/>
            }
            <FilterModal modalVisible={filterModalVisible}
                selectedFacultyNames={selectedFacultyNames}
                selectedTimePeriod={selectedTimePeriod}
                handleSelectedFacultyNames={handleSelectedFacultyNames}
                handleSelectedTimePeriod={handleSelectedTimePeriod}
                getNotifications={getNotifications}
                clearFilters={clearFilters}
                setModalVisible={setFilterModalVisible} />
        </AtomView>
    )
};
