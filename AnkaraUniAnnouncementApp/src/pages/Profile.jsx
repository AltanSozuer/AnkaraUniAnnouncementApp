import { useState } from "react"
import FormWithImage from "../components/templates/FormWithImage"
import SAMPLE_PERSON from "../constants/SamplePersonInfo"
export default function Profile() {
    const [data, setProfileData] = useState(SAMPLE_PERSON)

    const handleProfileData = (name) => {
        return (newValue) => {
            setProfileData( ( oldValue ) => ({ ...oldValue, [name]: newValue }))
        }
    }

    return (
       <FormWithImage data={data} onChangeData={handleProfileData} />
    )
};
