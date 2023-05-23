import { TouchableOpacity } from "react-native";

export default function AtomTouchableOpacity({
    style,
    onPress,
    activeOpacity,
    children
}) {
    return (
        <TouchableOpacity style={style} onPress={onPress} activeOpacity={activeOpacity}>
            {children}
        </TouchableOpacity>
    )    
};
