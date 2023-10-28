import classNames from "classnames"
import AppButtonProps, { AppButtonStates } from "../../ts-types/AppButtonProps"

const AppButton = (props: AppButtonProps) => {
    return (
        <button 
            className={classNames('w-80 h-12 px-4 py-2 drop-shadow-sm font-bold text-sm break-words uppercase xy-center-children ', props.className, {'btn-disabled' : props.variant === AppButtonStates.loading})} 
        >
           {props.children}
        </button>
    )
}

export default AppButton