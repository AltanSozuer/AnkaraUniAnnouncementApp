import AtomSafeAreaView from "../atoms/AtomSafeAreaView";
import AtomScrollView from "../atoms/AtomScrollView";
import AtomChip from "../atoms/AtomChip";


export default function FiltersSection({
    selectedFacultyNames, 
    selectedTimePeriod,
    clearSelectedFacultyNames, 
    clearSelectedTimePeriod 
}) {
    const FilterChip = ({filterName, onCloseFunc}) => {
        return (
            <AtomChip mode={"outlined"} 
                icon={"check-circle-outline"} 
                onClose={() => onCloseFunc()}>
                    {filterName}
            </AtomChip>
        )
    }
    
    return (
        <AtomSafeAreaView>
            <AtomScrollView horizontal={true}>
                {selectedFacultyNames && 
                    <FilterChip filterName={selectedFacultyNames} onCloseFunc={clearSelectedFacultyNames} />}
                {selectedTimePeriod && 
                    <FilterChip filterName={selectedTimePeriod} onCloseFunc={clearSelectedTimePeriod} /> }
            </AtomScrollView>
        </AtomSafeAreaView>
    )
};
