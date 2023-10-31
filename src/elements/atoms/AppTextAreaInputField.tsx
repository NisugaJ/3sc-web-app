/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames'

const AppTextAreaInputField = (props: any) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {children, className, ...otherProps} = props

    return (
        <textarea 
            className={classNames(
                "textarea textarea-bordered border-gray hover:border-pink-primary w-full max-w-md h-40 text-base font-mono",
                className
            )} 
            onClick={props.onClick}
            onChange={props.onClick}
            {...otherProps}
        />
    )
}

export default AppTextAreaInputField