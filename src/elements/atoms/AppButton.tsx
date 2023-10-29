import classNames from "classnames"
import AppButtonProps, { AppButtonStates } from "../../ts-types/AppButtonProps"

const AppButton = (props: AppButtonProps) => {
   
    // Seperating additionalClassNames from the props object
    const {additionalClassNames, variant, ...otherProps}: AppButtonProps = props;

    return (
        <button 
            className={classNames(
                'w-80 h-12 px-4 py-2 drop-shadow-sm font-bold text-sm break-words uppercase xy-center-children', 
                {'btn-disabled' : variant === AppButtonStates.loading},
                additionalClassNames
            )}
            {...otherProps}
        />
    )
}

export default AppButton