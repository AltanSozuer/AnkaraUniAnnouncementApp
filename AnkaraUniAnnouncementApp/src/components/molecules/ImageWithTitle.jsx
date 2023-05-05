import AtomImage from '../atoms/AtomImage'
import AtomView from '../atoms/AtomView'
import AtomText from '../atoms/AtomText'

export default function ImageWithTitle({
    title,
    imgSource,
    containerStyle,
    titleStyle,
    imageStyle
}) {
    return (
        <AtomView style={containerStyle}>
            <AtomImage source={imgSource} style={imageStyle} />
            <AtomText text={title} style={titleStyle} />
        </AtomView>
    )
};
