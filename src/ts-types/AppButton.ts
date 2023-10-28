import Props from "./Props";

interface AppButtonProps extends Props {
    onClick?: void
    variant?: string | 'active' | 'inactive' |'loading' | 'hover';
  }
  
  export default AppButtonProps