import { AntDesign  } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'
import PropTypes from 'prop-types'
export default function AtomSelect({
    data,
    onSelect,
    selectedItem,
    buttonTextAfterSelection,
    rowTextForSelection,
    rowTextStyle,
    buttonTextStyle,
    renderDropdownIcon,
    defaultButtonText,
    style
}) {
    return (
        <SelectDropdown
            style={style}
            data={data}
            onSelect={onSelect}
            defaultValue={selectedItem}
            buttonTextAfterSelection={buttonTextAfterSelection}
            rowTextForSelection={rowTextForSelection}
            renderDropdownIcon={renderDropdownIcon}
            rowTextStyle={rowTextStyle}
            buttonTextStyle={rowTextStyle}
            defaultButtonText={defaultButtonText}
        />
    )
};


AtomSelect.propTypes = {
}

AtomSelect.defaultProps = {
    defaultButtonText: "Select Option",
    renderDropdownIcon: () => <AntDesign name="down" size={20} color="black" />,
    rowTextStyle: { textAlign: "left" },
    buttonTextStyle: { textAlign: "left" }
} 