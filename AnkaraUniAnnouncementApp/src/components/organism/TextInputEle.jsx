import AtomTextInput from '../atoms/AtomTextInput'
import AtomView from '../atoms/AtomView'
export default function TextInputEle({
    style,
    editable,
    placeholder,
    onChangeText,
    value
}) {
    return (
        <AtomView>
            <AtomTextInput style={style}
                editable={editable} 
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}/>
        </AtomView>
    )
};
