import { FlatList } from "react-native"
export default function AtomFlatList({
    style,
    data,
    renderItem,
    keyExtractor,
    refreshControlComp
}) {
    return (
        <FlatList style={style} 
            horizontal={false} 
            data={data} 
            renderItem={renderItem} 
            keyExtractor={keyExtractor}
            refreshControl={refreshControlComp} />
    )
}