import { Avatar } from "react-native-paper";

export default function AtomAvatarText({
    size,
    label,
    color,
    style,
    labelStyle
}) {
    
    return (
        <Avatar.Text size={size}
            label={label}
            color={color}
            style={style}
            labelStyle={labelStyle} />
    )
};
