import { Chip } from "react-native-paper"
export default function AtomChip({
    style,
    icon,
    onPress,
    mode,
    children,
    rippleColor
}) {
    return (
        <Chip style={style} icon={icon}
            mode={mode}
            onPress={onPress}
            rippleColor={rippleColor}>
            {children}
        </Chip>
    )
};
