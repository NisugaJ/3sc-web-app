import AppButtonProps from "../../ts-types/AppButton"
import AppButton from "./AppButton"

const AppPrimaryButton = (props: AppButtonProps) => {
    return (
        <AppButton className="bg-black-primary text-white-primary hover:bg-white-primary hover:text-black-primary hover:outline hover:outline-2">
            {props.children}
        </AppButton>
    )
}

export default AppPrimaryButton