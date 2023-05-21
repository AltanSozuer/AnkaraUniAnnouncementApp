import { Pressable } from "react-native";
import TextWithTitle from "../molecules/TextWithTitle";
import AtomImage from '../atoms/AtomImage';
import AtomView from "../atoms/AtomView";
import AtomAvatarText from "../atoms/AtomAvatarText";
import { firstLettersAsAString } from "../../utils/StringManipulation";
import announcementItemStyle from '../../styles/AnnouncementItem'

export default function AnnouncementItem({
    from,
    title,
    date,
    fromLabel,
    onPress
}) {
    return (
        <Pressable onPress={onPress}>            
            <AtomView style={announcementItemStyle.container}>
                <AtomAvatarText style={announcementItemStyle.fromAvatar} size={64} label={fromLabel} labelStyle={announcementItemStyle.fromAvatarText} />
                <TextWithTitle style={announcementItemStyle} from={from} title={title} date={date} />
            </AtomView>
        </Pressable>


    )
};
