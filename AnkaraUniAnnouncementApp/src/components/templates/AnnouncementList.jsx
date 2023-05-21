import AnnouncementItem from "../organism/AnnouncementItem";
import AtomSafeAreaView from '../atoms/AtomSafeAreaView';
import AtomFlatList from '../atoms/AtomFlatList'
import { firstLettersAsAString } from "../../utils/StringManipulation";
import { fromNow } from "../../utils/DateManipulation";

export default function AnnouncementList({
    navigation,
    announcementList,
    handleAnnouncementList
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
                } >
            </AtomFlatList>
        </AtomSafeAreaView>
    )    
};
