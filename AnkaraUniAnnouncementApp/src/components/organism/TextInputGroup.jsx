import AtomView from "../atoms/AtomView";
import InputWithTitle from "../molecules/InputWithTitle";

export default function TextInputGroup({
    data,
    onChangeText,
    containerStyle,
    itemContainerStyle,
    textStyle,
    inputStyle
}) {
    return (
        <AtomView style={containerStyle}>
            <InputWithTitle inputType={"default"} 
                text={"Full Name"}
                value={data.fullname}
                onChangeText={onChangeText("fullname")} 
                textStyle={textStyle} 
                containerStyle={itemContainerStyle} 
                inputStyle={inputStyle}
                secureTextEntry={false} />
            <InputWithTitle inputType={"email-address"} 
                text={"Your Email"} 
                value={data.email} 
                onChangeText={onChangeText("email")} 
                textStyle={textStyle} 
                containerStyle={itemContainerStyle} 
                inputStyle={inputStyle} 
                secureTextEntry={false} />
            <InputWithTitle inputType={"default"} 
                text={"Password"}
                value={data.password} 
                onChangeText={onChangeText("password")} 
                textStyle={textStyle} 
                containerStyle={itemContainerStyle} 
                inputStyle={inputStyle}
                secureTextEntry={true} />
        </AtomView>
    )    
};
