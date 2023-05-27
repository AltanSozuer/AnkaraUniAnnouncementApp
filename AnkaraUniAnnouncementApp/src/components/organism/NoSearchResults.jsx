import AtomChip from "../atoms/AtomChip"
import AtomText from "../atoms/AtomText"
export default function NoSearchResults(params) {
    return (
        <AtomChip icon={"alert-decagram-outline"}
            mode={"flat"}
            rippleColor={"red"}>
            <AtomText style={{color: 'red'}} text={'No Search Results Found'} />
        </AtomChip>
    )
};
