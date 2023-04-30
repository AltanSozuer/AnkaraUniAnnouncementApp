import { Image } from "react-native"
export default function AtomImage({
    style,
    source
}) {
    return (
        <Image style={style} source={source} />
    )
}