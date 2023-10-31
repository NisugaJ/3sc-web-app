/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames'

const AppTextInputField = (props: any) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {children, className, ...otherProps} = props

    return (
        <input 
            className={classNames(
                "input input-bordered border-gray w-full max-w-md text-base font-mono",
                className
            )} 
            onClick={props.onClick}
            onChange={props.onClick}
            {...otherProps}
        />
    )
}

export default AppTextInputField