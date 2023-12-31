import { colors } from "../../colors"
import LoadingSpinnerProps from "../../ts-types/LoadingSpinnerProps"

const AppLoadingSpinner = (props: LoadingSpinnerProps) => {
    const color = props.color ? props.color : colors["black-primary"]

    return (
        <div>
            <dialog id="my_modal_2" className="modal modal-open">
                <div className="modal-box xy-center-children bg-transparent border-none shadow-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="Spinner" className="h-8 w-8  animate-spin-slow">
                        <rect width="256" height="256" fill="none"></rect>
                        <line x1="128" x2="128" y1="32" y2="64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" className="colorStroke000000 svgStroke"></line>
                        <line x1="195.882" x2="173.255" y1="60.118" y2="82.745" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" className="colorStroke000000 svgStroke"></line>
                        <line x1="224" x2="192" y1="128" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" className="colorStroke000000 svgStroke"></line>
                        <line x1="195.882" x2="173.255" y1="195.882" y2="173.255" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" className="colorStroke000000 svgStroke"></line>
                        <line x1="128" x2="128" y1="224" y2="192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" className="colorStroke000000 svgStroke"></line>
                        <line x1="60.118" x2="82.745" y1="195.882" y2="173.255" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" className="colorStroke000000 svgStroke"></line>
                        <line x1="32" x2="64" y1="128" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" className="colorStroke000000 svgStroke"></line>
                        <line x1="60.118" x2="82.745" y1="60.118" y2="82.745" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" className="colorStroke000000 svgStroke"></line>
                    </svg>
                </div>
            </dialog>
        </div>
    )
}

export default AppLoadingSpinner