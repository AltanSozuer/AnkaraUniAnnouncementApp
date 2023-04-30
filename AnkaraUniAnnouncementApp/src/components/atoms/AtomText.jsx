import { Text } from "react-native"
export default function AtomText({
    style,
    text,
    onPress,
    numberOfLines,
}) {
    return (
        <Text style={style}
            onPress={onPress}
            numberOfLines={numberOfLines}>
                {text}
        </Text>
    )
}