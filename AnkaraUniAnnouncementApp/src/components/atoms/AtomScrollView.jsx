import { FlatList } from "react-native"
export default function AtomFlatList({
    style,
    data,
    renderItem
}) {
    return (
        <FlatList style={style} data={data} renderItem={renderItem} />
    )
}