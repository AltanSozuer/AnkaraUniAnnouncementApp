import { FlatList } from "react-native"
export default function AtomFlatList({
    style,
    data,
    renderItem,
    keyExtractor
}) {
    return (
        <FlatList style={style} data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
    )
}