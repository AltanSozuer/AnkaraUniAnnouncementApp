import { Divider } from "react-native-paper";
import AtomText from "../atoms/AtomText";
import AtomView from "../atoms/AtomView"
import AtomButton from '../atoms/AtomButton';
import SelectWithTitle from "../molecules/SelectWithTitle"
import filterModalStyle from "../../styles/FilterModal";
import {timePeriodOptions} from "../../constants/TimePeriods";
import { facultyNameList } from "../../constants/FacultyDomains";
import AtomModal from "../atoms/AtomModal";
import AtomTouchableOpacity from "../atoms/AtomTouchableOpacity";
import { useState } from "react";

export default function FilterModal({
    style,
    modalVisible,
    selectedFacultyNames,
    selectedTimePeriod,
    handleSelectedFacultyNames,
    handleSelectedTimePeriod,
    getNotifications,
    clearFilters,
    setModalVisible
}) {

    const applyFilter = async () => {
        await getNotifications();
        setModalVisible(false);
    }

    return (
        <AtomView style={filterModalStyle.parentContainer}>
            <AtomModal animationType={"slide"} transparent={true} visible={modalVisible}>
                {/* <AtomTouchableOpacity activeOpacity={1} onPress={() => setModalVisible(false)}>
                    
                </AtomTouchableOpacity> */}
                    <AtomView style={filterModalStyle.modal}>
                        <AtomView style={filterModalStyle.titleContainer}>
                            <Divider style={filterModalStyle.divider} />
                            <AtomText text={"Filter Search Results"} style={filterModalStyle.mainTitle}/>
                        </AtomView>
                        <AtomView style={filterModalStyle.selectGroupContainer}>
                            <SelectWithTitle text={'Time Period'} 
                                selectOptions={timePeriodOptions}
                                onSelect={handleSelectedTimePeriod}
                                selectedItem= {selectedTimePeriod } 
                                textStyle={filterModalStyle.selectTitle} 
                                containerStyle={filterModalStyle.selectWithTitleContainer} 
                                selectStyle={filterModalStyle.selectTitle} />
                            <SelectWithTitle text={'Websites'} 
                                selectOptions={facultyNameList}
                                onSelect={handleSelectedFacultyNames}
                                selectedItem={selectedFacultyNames && selectedFacultyNames[0]}
                                textStyle={filterModalStyle.selectTitle} 
                                containerStyle={filterModalStyle.selectWithTitleContainer} 
                                selectStyle={filterModalStyle.selectTitle} />
                        </AtomView>
                        <AtomView style={filterModalStyle.buttonContainer}>
                            <AtomButton style={filterModalStyle.applyButton} title={"Apply Filters"} 
                                mode={"elevated"}
                                buttonColor={"white"}
                                textColor={"green"}
                                onPress={async () => {await applyFilter()}} />
                        </AtomView>
                    </AtomView>
            </AtomModal>
        </AtomView>
    )
};
