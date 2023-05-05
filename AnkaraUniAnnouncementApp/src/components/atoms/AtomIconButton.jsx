import { IconButton } from 'react-native-paper'

export default function AtomIconButton({
    iconName,
    size,
    mode,
    iconColor,
    containerColor,
    disabled,
    style,
    onPress
}) {
    return (
        <IconButton
            icon={iconName}
            size={size}
            mode={mode}
            style={style}
            iconColor={iconColor}
            containerColor={containerColor}
            disabled={disabled}
            onPress={onPress} />
    )
};
