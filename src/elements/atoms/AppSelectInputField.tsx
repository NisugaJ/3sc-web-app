import Select, { Props } from 'react-select'
import { colors } from "../../colors"


const AppSelectInputField = (props: Props) => {

    return (
        <Select
            closeMenuOnSelect={true}
            styles={{
            control: (base)=>({
                ...base,
                borderRadius: 0,
                width: "inherit",
            }),
            dropdownIndicator:(base)=>({
                ...base,
                color: colors["pink-primary"]
            }),
            indicatorSeparator:(base)=>({
                ...base,
                display:'none'
            })
            }}
            {...props} 
        />
    )
}

export default AppSelectInputField