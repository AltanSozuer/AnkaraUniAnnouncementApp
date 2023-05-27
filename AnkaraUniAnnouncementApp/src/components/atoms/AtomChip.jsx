import { Chip } from "react-native-paper"
export default function AtomChip({
    style,
    icon,
    onPress,
    onClose,
    mode,
    children,
    rippleColor
}) {
    return (
        <Chip style={style} icon={icon}
            mode={mode}
            onPress={onPress}
            onClose={onClose}
            rippleColor={rippleColor}>
            {children}
        </Chip>
    )
};
