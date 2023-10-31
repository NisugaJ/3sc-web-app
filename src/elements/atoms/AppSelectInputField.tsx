import Select, { Props } from 'react-select'
import { colors } from "../../colors"


const AppSelectInputField = (props: Props) => {

    return (
        <Select
            closeMenuOnSelect={true}
            styles={{
            container:(base,state)=>({
                ...base,
                borderColor: state.isFocused ? colors["pink-primary"] : colors["gray"]['DEFAULT'],
            }),
            valueContainer:(base)=>({
                ...base,
                padding: "6px 12px 6px 12px",
                fontSize: "16px",
                fontFamily: "Anonymous Pro",
            }),
            control: (base, state)=>({
                ...base,
                borderRadius: 0,
                width: "100%",
                borderColor: state.isFocused ? colors["pink-primary"] : colors["gray"]['DEFAULT'],
                "&:hover": {
                    borderColor: colors["pink-primary"]
                },
                "&:active": {
                    borderColor: colors["pink-primary"]
                }
            }),
            dropdownIndicator:(base)=>({
                ...base,
                color: colors["pink-primary"]
            }),
            indicatorSeparator:(base)=>({
                ...base,
                display:'none'
            }),
            option:(base, state)=>({
                ...base,
                fontFamily: "Anonymous Pro",
                fontSize: "16px",
                border: "1px solid transparent",
                marginBottom: "2px",
                backgroundColor: colors["gray"]['light'],
                color:state.isSelected ? colors["pink-primary"] : colors["black-primary"],
            })
            }}
            onChange={props.onChange}
            {...props} 
        />
    )
}

export default AppSelectInputField