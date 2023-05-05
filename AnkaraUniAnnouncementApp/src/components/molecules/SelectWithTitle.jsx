import AtomSelect from "../atoms/AtomSelect";
import AtomView from "../atoms/AtomView";
import AtomText from "../atoms/AtomText";

export default function SelectWithTitle({
    containerStyle,
    textStyle,
    selectStyle,
    text,
    selectOptions,
    onSelect
}) {
    return (
        <AtomView style={containerStyle}>
            <AtomText style={textStyle} text={text}/>
            <AtomSelect data={selectOptions} onSelect={onSelect} style={selectStyle}/>
        </AtomView>
    )
};
