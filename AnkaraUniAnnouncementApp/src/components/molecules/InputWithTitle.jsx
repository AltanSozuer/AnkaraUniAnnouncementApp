import AtomView from '../atoms/AtomView'
import AtomTextInput from '../atoms/AtomTextInput'
import AtomText from '../atoms/AtomText'

export default function InputWithTitle({
    text,
    value,
    inputType,
    containerStyle,
    textStyle,
    inputStyle,
    secureTextEntry
}) {
    return (
        <AtomView style={containerStyle}>
            <AtomText text={text} style={textStyle} />
            <AtomTextInput style={inputStyle} value={value} keyboardType={inputType} secureTextEntry={secureTextEntry} />
        </AtomView>
    )
};
