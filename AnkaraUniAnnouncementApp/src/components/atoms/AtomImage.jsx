import { Image } from "react-native"
export default function AtomImage({
    style,
    src,
    source
}) {
    return (
        <Image style={style} source={{uri: source}} src={src} />
    )
}