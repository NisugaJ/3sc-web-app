import AppInputElementProps from "../../ts-types/AppInputElementProps"
import classNames from 'classnames' 
import AppSelectInputField from "./AppSelectInputField"

const AppInputElement = (props:  AppInputElementProps) => {

    const {additionalClassNames,labelText,topRightLabel,bottomLeftLabel,bottomRightLabel, ...otherProps}: AppInputElementProps = props

    return (
        <div 
            className={classNames("form-control w-full", additionalClassNames) } 
            {...otherProps} 
        >
            <label className="label pl-0">
                <span className="label-text font-bold text-base">{labelText}</span>
                <span className="label-text-alt">{topRightLabel}</span>
            </label>
                {props.type === "select" ?
                    <AppSelectInputField {...otherProps.otherField} />
                :
                props.type === "textarea"?
                    <textarea className={classNames("textarea textarea-bordered border-gray  w-full max-w-md text-base font-mono h-40") } {...otherProps} />
                :
                    <input className={classNames("input input-bordered border-gray w-full max-w-md text-base font-mono") } {...otherProps} />
            }
            <label className="label pl-0">
                <span className="label-text-alt">{bottomLeftLabel}</span>
                <span className="label-text-alt">{bottomRightLabel}</span>
            </label>
        </div>
    )
}

export default AppInputElement