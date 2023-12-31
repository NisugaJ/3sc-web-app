import classNames from "classnames"

import AppButtonProps, { AppButtonStates } from "../../ts-types/AppButtonProps"
import AppButton from "./AppButton"
import AppLoadingSpinner from "./AppLoadingSpinner"
import { colors } from "../../colors"

const AppPrimaryButton = (props: AppButtonProps) => {
    return (
        <AppButton 
            additionalClassNames={
                classNames(
                    "bg-black-primary text-white-primary hover:bg-white-primary hover:text-black-primary hover:outline hover:outline-2",
                    { 'btn-disabled bg-gray': props.variant === AppButtonStates.inactive},
                    props.additionalClassNames
                )
            }
            {...props}
        >
        { 
            props.variant==='loading'?
            <AppLoadingSpinner color={colors["white-primary"]}/>
        :
            props.children
        }
        </AppButton>
    )
}

export default AppPrimaryButton