import AtomText from "../atoms/AtomText";
import AtomView from "../atoms/AtomView";

export default function TextWithTitle({
    style,
    from,
    title,
    date
}) {
    return (
        <AtomView style={style.contentContainer}>
            <AtomText text={from} style={style.from}/>
            <AtomText text={title} style={style.title}/>
            <AtomText text={date} style={style.date}/>
        </AtomView>
    )    
};
