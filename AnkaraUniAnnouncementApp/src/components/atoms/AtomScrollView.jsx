import { ScrollView } from 'react-native'

export default function AtomScrollView({
    children,
    style
}) {
    return (
        <ScrollView style={style}>
            {children}
        </ScrollView>
    )
};
