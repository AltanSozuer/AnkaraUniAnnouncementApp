import AtomTextInput from '../atoms/AtomTextInput'
import AtomView from '../atoms/AtomView'
export default function TextInputEle({
    style
}) {
    return (
        <AtomView>
            <AtomTextInput style={style} editable={true} placeholder={"Search announcement"}/>
        </AtomView>
    )
};
