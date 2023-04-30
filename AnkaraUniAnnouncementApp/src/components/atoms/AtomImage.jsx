import { Image } from "react-native"
export default function AtomImage({
    style,
    src,
    source
}) {
    return (
        <Image style={style} source={source} src={src} />
    )
}