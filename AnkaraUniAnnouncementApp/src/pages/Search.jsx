import { useState, useContext, useEffect, useRef } from "react";
import { ActivityIndicator } from "react-native";
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
import { AxiosContext } from "../context/AxiosContext";

export default function Search({ navigation }) {
    const [refreshing, setRefreshing] = useState(true)
    const [filterModalVisible, setFilterModalVisible] = useState(false)
    const [notificationList, setNotificationList] = useState([]);
    const [selectedFacultyNames, setSelectedFacultyNames] = useState(undefined);
    const [selectedTimePeriod, setSelectedTimePeriod] = useState(undefined)
    const [searchText, setSearchText] = useState("");
    const currNotifListRef = useRef(notificationList)

    const { authAxios } = useContext(AxiosContext)

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
        const notifList = await new NotificationService(authAxios).getAllNotifications({
            facultyList: selectedFacultyNames, 
            timeUntil: selectedTimePeriod && subtractGivenAmountOfTimeToNow(selectedTimePeriod),
            searchText: searchText
        })
        handleNotificationList(notifList);
        setRefreshing(() => false);
    }

    useEffect(() => {
        getNotifications().catch(console.error)

    }, [currNotifListRef.current , searchText, selectedFacultyNames, selectedTimePeriod])

    return (
        <AtomView style={searchPageStyle.parent}>
            {
                refreshing ? <ActivityIndicator /> : null
            } 
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
            ? <AnnouncementList navigation={navigation} announcementList={notificationList} refreshing={refreshing} onRefresh={getNotifications} />
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
