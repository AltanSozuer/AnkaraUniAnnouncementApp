import { Button } from "react-native"
export default function AtomButton({
    style,
    title,
    onPress
}) {
    return (
        <Button style={style} title={title} onPress={onPress} />
    )
}