import { Text, View } from "react-native"
import AnnouncementItem from "../components/organism/AnnouncementItem"
import AtomSafeAreaView from '../components/atoms/AtomSafeAreaView'
import AtomFlatList from '../components/atoms/AtomFlatList'
import ANNO_ITEM from "../constants/DummyAnnouncementItem"

export default function Home() {

    return (
        // <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
        //     {/* <Text>Homepage</Text> */}
           
        // </View>
        <AtomSafeAreaView>
            <AtomFlatList
                data={new Array(10).map( () => ANNO_ITEM)}
                renderItem={(item) => <AnnouncementItem from={item.from} title={item.title} date={item.date} />}>
            </AtomFlatList>
        </AtomSafeAreaView>
    )
};
