import { Button } from "react-native-paper"
import PropTypes from 'prop-types'

export default function AtomButton({
    styleContainer,
    style,
    title,
    onPress,
    mode,
    buttonColor,
    textColor,
    disabled,
    loading
}) {
    return (
        <Button style={styleContainer} 
            labelStyle={style} 
            onPress={onPress} 
            mode={mode}
            loading={loading}
            buttonColor={buttonColor} 
            textColor={textColor}
            disabled={disabled} >
            {loading ? null : title}
        </Button>
    )
}

AtomButton.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    mode: PropTypes.oneOf([
        "text",
        "outlined",
        "contained",
        "elevated",
        "contained-tonal"
    ]),
    disabled: PropTypes.bool
}

AtomButton.defaultValues = {
    mode: "contained",
    disabled: false,
    buttonColor: "red",
    loading: false
}