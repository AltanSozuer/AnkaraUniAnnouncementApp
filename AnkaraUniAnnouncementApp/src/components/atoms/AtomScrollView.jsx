import { ScrollView } from 'react-native'

export default function AtomScrollView({
    horizontal,
    keyboardShouldPersistTaps,
    contentContainerStyle,
    children,
    style
}) {
    return (
        <ScrollView style={style} 
            horizontal={horizontal}
            keyboardShouldPersistTaps={keyboardShouldPersistTaps}
            contentContainerStyle={contentContainerStyle}>
            {children}
        </ScrollView>
    )
};
