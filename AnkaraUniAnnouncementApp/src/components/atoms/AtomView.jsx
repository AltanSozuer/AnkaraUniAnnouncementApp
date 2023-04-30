import { View } from "react-native"
export default function AtomView({
    style,
    children
}) {
    return (
        <View style={style}>
            {children}
        </View>
    )
}