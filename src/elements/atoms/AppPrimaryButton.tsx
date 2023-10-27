import AppButtonProps from "../../ts-types/AppButton"
import AppButton from "./AppButton"

const AppPrimaryButton = (props: AppButtonProps) => {
    return (
        <AppButton className="bg-black-primary text-white-primary">{props.children}</AppButton>
    )
}

export default AppPrimaryButton