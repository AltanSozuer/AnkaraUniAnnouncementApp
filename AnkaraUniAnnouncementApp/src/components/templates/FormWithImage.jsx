import AtomScrollView from '../atoms/AtomScrollView';
import AtomView from "../atoms/AtomView";
import AtomText from "../atoms/AtomText";
import AtomButton from '../atoms/AtomButton'
import ImageWithTitle from "../molecules/ImageWithTitle";
import TextInputGroup from "../organism/TextInputGroup";
import formWithImageStyle from "../../styles/FormWithImage";

export default function FormWithImage({
    data,
    onPress
}) {
    return (
        <AtomScrollView style={formWithImageStyle.scrollContainer}>
            <AtomView style={formWithImageStyle.parentContainer}>                
                <ImageWithTitle title={data.fullname} 
                    imgSource={data.profilePhoto} 
                    containerStyle={formWithImageStyle.imageContainer} 
                    imageStyle={formWithImageStyle.image} 
                    titleStyle={formWithImageStyle.imageTitle} />
                <AtomText text={"Edit Profile"} 
                    style={formWithImageStyle.infoTitle} />
                <TextInputGroup data={data} inputStyle={formWithImageStyle.inputStyle}
                    textStyle={formWithImageStyle.inputTextStyle} 
                    itemContainerStyle={formWithImageStyle.inputItemContainer} 
                    containerStyle={formWithImageStyle.inputGroupContainer} />
                <AtomButton title={"Save Changes"} style={formWithImageStyle.button} 
                    mode={"contained"}
                    buttonColor={"green"} 
                    textColor={"white"} 
                    disabled={false} 
                    onPress={onPress} />
            </AtomView>
        </AtomScrollView>
    )
};
