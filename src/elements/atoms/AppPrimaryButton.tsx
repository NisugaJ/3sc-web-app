import classNames from "classnames"

import AppButtonProps, { AppButtonStates } from "../../ts-types/AppButtonProps"
import AppButton from "./AppButton"
import LoadingSpinner from "./LoadingSpinner"
import { colors } from "../../colors"

const AppPrimaryButton = (props: AppButtonProps) => {
    return (
        <AppButton 
            className={
                classNames(
                "bg-black-primary text-white-primary hover:bg-white-primary hover:text-black-primary hover:outline hover:outline-2",

                { 'bg-gray': props.variant === AppButtonStates.inactive}
                )
            }
            {...props}
        >
        { 
            props.variant==='loading'?
            <LoadingSpinner color={colors["white-primary"]}/>
        :
            props.children
        }
        </AppButton>
    )
}

export default AppPrimaryButton