import classNames from "classnames"
import AppButtonProps from "../../ts-types/AppButton"

const AppButton = (props: AppButtonProps) => {
    return (
        <button className={classNames('w-80 h-12 px-4 py-2 font-bold text-sm break-words uppercase', props.className)} >{props.children}</button>
    )
}

export default AppButton