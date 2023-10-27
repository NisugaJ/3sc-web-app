import AppButtonProps from "../../ts-types/AppButton"
import AppButton from "./AppButton"

const AppSecondaryButton = (props: AppButtonProps) => {
    return (
        <AppButton className="bg-white-primary text-black-primary outline outline-2">{props.children}</AppButton>
    )
}

export default AppSecondaryButton