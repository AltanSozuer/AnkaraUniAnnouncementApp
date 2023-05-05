import SelectDropdown from 'react-native-select-dropdown'
export default function AtomSelect({
    data,
    onSelect,
    buttonTextAfterSelection,
    rowTextForSelection,
    style
}) {
    return (
        <SelectDropdown
            style={style}
            data={data}
            onSelect={onSelect}
            buttonTextAfterSelection={buttonTextAfterSelection}
            rowTextForSelection={rowTextForSelection}
        />
    )
};
