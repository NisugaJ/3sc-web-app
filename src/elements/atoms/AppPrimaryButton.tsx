import AppButtonProps from "../../ts-types/AppButton"

const AppPrimaryButton = (props: AppButtonProps) => {
    return (
        <button className="bg-black-primary w-auto text-white-primary px-4 py-2">{props.children}</button>
    )
}

export default AppPrimaryButton