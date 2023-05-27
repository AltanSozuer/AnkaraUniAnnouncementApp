import AtomView from "../atoms/AtomView";
import AnnouncementItemSkeleton from "../molecules/AnnouncementItemSkeleton";

export default function AnnouncementSkeletonGroup({
    containerStyle,
    itemCount
}) {
    return (
        <AtomView style={containerStyle}>
           {[...new Array(itemCount)].map(_ => <AnnouncementItemSkeleton />)}
        </AtomView>
    )
};
