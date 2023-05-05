import { Pressable } from "react-native";
import TextWithTitle from "../molecules/TextWithTitle";
import AtomImage from '../atoms/AtomImage';
import AtomView from "../atoms/AtomView";
import announcementItemStyle from '../../styles/AnnouncementItem'

export default function AnnouncementItem({
    from,
    title,
    date,
    imageSrc,
    onPress
}) {
    return (
        <Pressable onPress={onPress}>            
            <AtomView style={announcementItemStyle.container}>
                <AtomImage style={announcementItemStyle.fromImg} source={imageSrc}/>
                <TextWithTitle style={announcementItemStyle} from={from} title={title} date={date} />
            </AtomView>
        </Pressable>


    )
};
