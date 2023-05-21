import { useState } from "react";
import AtomIconButton from "../components/atoms/AtomIconButton";
import TextInputEle from "../components/organism/TextInputEle";
import AtomView from "../components/atoms/AtomView";
import searchPageStyle from "../styles/SearchPage";
import AnnouncementList from "../components/templates/AnnouncementList";
import FilterModal from "../components/templates/FilterModal";

export default function Search({navigation}) {
    const [filterModalVisible, setFilterModalVisible] = useState(false)

    return (
        <AtomView style={searchPageStyle.parent}>
            <AtomView style={searchPageStyle.searchContainer}>
                <TextInputEle style={searchPageStyle.textInput} />
                <AtomIconButton iconName={"filter-variant"}
                    mode={"contained"}
                    iconColor={"white"}
                    containerColor={"green"}
                    style={searchPageStyle.filterButton}
                    disabled={false}
                    size={20}
                    onPress={() => setFilterModalVisible(true)} />
            </AtomView>
            <AnnouncementList navigation={navigation} />
            <FilterModal modalVisible={filterModalVisible} setModalVisible={setFilterModalVisible} />
        </AtomView>
    )
};
