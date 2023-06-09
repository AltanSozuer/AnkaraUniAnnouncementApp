import { RefreshControl } from "react-native";
import AnnouncementItem from "../organism/AnnouncementItem";
import AtomSafeAreaView from '../atoms/AtomSafeAreaView';
import AtomFlatList from '../atoms/AtomFlatList'
import { firstLettersAsAString } from "../../utils/StringManipulation";
import { fromNow } from "../../utils/DateManipulation";

export default function AnnouncementList({
    navigation,
    announcementList,
    handleAnnouncementList,
    refreshing,
    onRefresh
}) {
    return (
        <AtomSafeAreaView>
            <AtomFlatList
                data={announcementList}
                renderItem={({item}) => 
                   <AnnouncementItem from={item.from}
                        fromLabel={firstLettersAsAString(item.from)} 
                        title={item.notificationTitle} 
                        date={fromNow(item.date)} 
                        onPress={() => {
                            navigation.navigate('AnnouncementDetail', {
                                itemId: item._id,
                                notificationData: item,
                            })
                        }}/>
                }
                refreshControlComp={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                } >
            </AtomFlatList>
        </AtomSafeAreaView>
    )    
};
