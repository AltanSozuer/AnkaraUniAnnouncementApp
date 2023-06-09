import { Modal } from "react-native"

export default function AtomModal({
    style,
    animationType,
    transparent,
    visible,
    children
}) {
    return (
        <Modal
            style={style}
            animationType={animationType}
            transparent={transparent}
            visible={visible} >
                {children}
        </Modal>
    )
}