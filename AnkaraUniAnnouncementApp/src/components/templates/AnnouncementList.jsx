import AnnouncementItem from "../organism/AnnouncementItem";
import AtomSafeAreaView from '../atoms/AtomSafeAreaView';
import AtomFlatList from '../atoms/AtomFlatList'
import ANNO_ITEM from "../../constants/DummyAnnouncementItem";

export default function AnnouncementList({navigation}) {
    return (
        <AtomSafeAreaView>
            <AtomFlatList
                data={ANNO_ITEM}
                renderItem={({item}) => 
                   <AnnouncementItem from={item.from}
                        imageSrc={item.imageSrc} 
                        title={item.title} 
                        date={item.date} 
                        onPress={() => {
                            navigation.navigate('AnnouncementDetail', {
                                itemId: 75
                            })
                        }}/>
                } >
            </AtomFlatList>
        </AtomSafeAreaView>
    )    
};
