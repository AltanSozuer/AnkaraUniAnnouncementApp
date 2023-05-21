import AnnouncementItem from "../organism/AnnouncementItem";
import AtomSafeAreaView from '../atoms/AtomSafeAreaView';
import AtomFlatList from '../atoms/AtomFlatList'
import { firstLettersAsAString } from "../../utils/StringManipulation";
import ANNO_ITEM from "../../constants/DummyAnnouncementItem";

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
                        date={item.date} 
                        onPress={() => {
                            navigation.navigate('AnnouncementDetail', {
                                itemId: item._id,
                                content: item.notificationContent
                            })
                        }}/>
                } >
            </AtomFlatList>
        </AtomSafeAreaView>
    )    
};
