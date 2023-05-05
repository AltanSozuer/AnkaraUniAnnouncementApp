import { TextInput } from "react-native";
import PropTypes from 'prop-types'

export default function AtomTextInput({
    style,
    onChangeText,
    value,
    editable,
    placeholder,
    keyboardType,
    secureTextEntry
}) {
    return (
        <TextInput style={style}
            onChangeText={onChangeText}
            editable={editable}
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry} />
    )
}

AtomTextInput.defaultValues = {
    editable: true
}