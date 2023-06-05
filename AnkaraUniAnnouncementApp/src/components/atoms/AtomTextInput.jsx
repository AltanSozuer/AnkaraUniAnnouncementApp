import { TextInput } from "react-native";
import PropTypes from 'prop-types'

export default function AtomTextInput({
    style,
    onChangeText,
    value,
    ref,
    editable,
    placeholder,
    keyboardType,
    secureTextEntry,
    underlineColorAndroid,
    placeholderTextColor,
    autoCapitalize,
    returnKeyType,
    onSubmitEditing,
    blurOnSubmit
}) {
    return (
        <TextInput style={style} ref={ref}
            onChangeText={onChangeText}
            editable={editable}
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
            underlineColorAndroid={underlineColorAndroid}
            placeholderTextColor={placeholderTextColor}
            autoCapitalize={autoCapitalize}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
            blurOnSubmit={blurOnSubmit}
            secureTextEntry={secureTextEntry} />
    )
}

AtomTextInput.defaultValues = {
    editable: true
}