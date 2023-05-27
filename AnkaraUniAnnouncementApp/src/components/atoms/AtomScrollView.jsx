import { ScrollView } from 'react-native'

export default function AtomScrollView({
    horizontal,
    children,
    style
}) {
    return (
        <ScrollView style={style} horizontal={horizontal}>
            {children}
        </ScrollView>
    )
};
