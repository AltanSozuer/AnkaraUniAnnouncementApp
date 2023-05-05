import { Button } from "react-native-paper"
import PropTypes from 'prop-types'

export default function AtomButton({
    style,
    title,
    onPress,
    mode,
    buttonColor,
    textColor,
    disabled,
    
}) {
    return (
        <Button labelStyle={style} onPress={onPress} 
            mode={mode} 
            buttonColor={buttonColor} 
            textColor={textColor}
            disabled={disabled} >
            {title}
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
    buttonColor: "red"
}