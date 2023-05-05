import { FlatList } from "react-native"
export default function AtomFlatList({
    style,
    data,
    renderItem,
    keyExtractor
}) {
    return (
        <FlatList style={style} horizontal={false} data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
    )
}