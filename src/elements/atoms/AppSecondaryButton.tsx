import classNames from "classnames"

import AppButtonProps from "../../ts-types/AppButtonProps"
import AppButton from "./AppButton"
import LoadingSpinner from "./LoadingSpinner"
import { colors } from "../../colors"

const AppSecondaryButton = (props: AppButtonProps) => {
    return (
        <AppButton 
            className={
                classNames("bg-white-primary text-black-primary outline outline-2 hover:outline-pink-primary",
                {'outline-gray text-gray-dark': props.variant === 'inactive'}
                )
            }
            {...props}
        >
            { 
            props.variant==='loading'?
            <LoadingSpinner color={colors["black-primary"]}/>
        :
            props.children
        }
        </AppButton>
    )
}

export default AppSecondaryButton