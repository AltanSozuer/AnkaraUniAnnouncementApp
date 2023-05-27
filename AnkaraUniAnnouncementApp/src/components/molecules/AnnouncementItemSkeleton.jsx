import AtomSkeleton from "../atoms/AtomSkeleton";
import { Rect, Circle } from 'react-content-loader/native'

export default function AnnouncementItemSkeleton(params) {
    return (
        <AtomSkeleton viewBox={"0 0 380 70"} speed={2}
            animate={true} 
            backgroundColor={"#d9d9d9"} 
            foregroundColor={"#ededed"} >
            <Circle cx="30" cy="30" r="30" />
            <Rect x="80" y="17" rx="4" ry="4" width="220" height="13" />
            <Rect x="80" y="40" rx="3" ry="3" width="270" height="13" />
        </AtomSkeleton>
    )
};
