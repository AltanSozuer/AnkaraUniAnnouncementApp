import { StatusBar } from "react-native"

export default function AtomStatusBar({
    style,
    animated,
    barStyle,
    showHideTransition,
    hidden
}) {
    return (
        <StatusBar
            style={style}
            animated={animated}
            barStyle={barStyle}
            showHideTransition={showHideTransition}
            hidden={hidden} />
    )
}