import { TouchableOpacity } from "react-native";

export default function AtomTouchableOpacity({
    style,
    onPress,
    children
}) {
    return (
        <TouchableOpacity style={style} onPress={onPress} >
            {children}
        </TouchableOpacity>
    )    
};
