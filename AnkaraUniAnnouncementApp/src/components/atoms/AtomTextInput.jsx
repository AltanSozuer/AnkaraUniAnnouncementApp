import { TextInput } from "react-native";
export default function AtomTextInput({
    style,
    onChangeText,
    value,
    editable,
    placeholder,
    keyboardType
}) {
    return (
        <TextInput style={style}
            onChangeText={onChangeText}
            editable={editable}
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType} />
    )
}