import TextWithTitle from "../molecules/TextWithTitle";
import AtomImage from '../atoms/AtomImage';
import AtomView from "../atoms/AtomView";
import announcementItemStyle from '../../styles/AnnouncementItem'

export default function AnnouncementItem({
    from,
    title,
    date
}) {
    return (
        <AtomView style={announcementItemStyle.container}>
            <AtomImage style={announcementItemStyle.fromImg} src={"https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"}/>
            <TextWithTitle style={announcementItemStyle} from={from} title={title} date={date} />
        </AtomView>
    )
};
