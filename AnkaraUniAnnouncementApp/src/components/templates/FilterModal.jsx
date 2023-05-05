import { Divider } from "react-native-paper";
import AtomText from "../atoms/AtomText";
import AtomView from "../atoms/AtomView"
import AtomButton from '../atoms/AtomButton';
import SelectWithTitle from "../molecules/SelectWithTitle"
import filterModalStyle from "../../styles/FilterModal";
import TIME_PERIODS from "../../constants/TimePeriods";
import WEBSITES from "../../constants/WebsitesOfDepartments";
import AtomModal from "../atoms/AtomModal";

export default function FilterModal({
    style,
    modalVisible,
    setModalVisible
}) {
    return (
        <AtomView style={filterModalStyle.parentContainer}>
            <AtomModal animationType={"slide"} transparent={true} visible={modalVisible}>
                <AtomView style={filterModalStyle.modal}>
                    <AtomView style={filterModalStyle.titleContainer}>
                        <Divider style={filterModalStyle.divider} />
                        <AtomText text={"Filter Search Results"} style={filterModalStyle.mainTitle}/>
                    </AtomView>
                    <AtomView style={filterModalStyle.selectGroupContainer}>
                        <SelectWithTitle text={'Time Period'} 
                            selectOptions={TIME_PERIODS} 
                            textStyle={filterModalStyle.selectTitle} 
                            containerStyle={filterModalStyle.selectWithTitleContainer} 
                            selectStyle={filterModalStyle.selectTitle} />
                        <SelectWithTitle text={'Websites'} 
                            selectOptions={WEBSITES}
                            textStyle={filterModalStyle.selectTitle} 
                            containerStyle={filterModalStyle.selectWithTitleContainer} 
                            selectStyle={filterModalStyle.selectTitle} />
                    </AtomView>
                    <AtomView style={filterModalStyle.buttonContainer}>
                        <AtomButton style={filterModalStyle.applyButton} title={"Apply Filters"} 
                            mode={"elevated"}
                            buttonColor={"white"}
                            textColor={"green"}
                            onPress={() => setModalVisible(false)} />
                    </AtomView>
                </AtomView>
            </AtomModal>
        </AtomView>
    )
};
