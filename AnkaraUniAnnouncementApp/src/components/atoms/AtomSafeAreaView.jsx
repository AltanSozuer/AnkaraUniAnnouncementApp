import { SafeAreaView } from "react-native";


export default function AtomSafeAreaView({
    style,
    children
}) {
    return (
        <SafeAreaView style={style}>
            {children}
        </SafeAreaView> 
    )
}