/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react"
import Props from "./Props"

interface AppInputElementProps extends Props{ 
    labelText: string, 
    topRightLabel?: string, 
    bottomLeftLabel?: string, 
    bottomRightLabel?: string,
    type?: string 
    placeholder?: string
    otherField?: any | object | ReactNode
} 

export default AppInputElementProps