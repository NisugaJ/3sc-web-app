import Props from "./Props";

export enum AppButtonStates {
  active = 'active',
  inactive = 'inactive',
  loading = 'loading',
  hover = 'hover'
}

interface AppButtonProps extends Props {
    variant?: AppButtonStates | AppButtonStates.active
    onClick?: () => void
  }
  
  export default AppButtonProps