import './App.css'
import AppPrimaryButton from './elements/atoms/AppPrimaryButton'
import AppSecondaryButton from './elements/atoms/AppSecondaryButton'
import { AppButtonStates } from './ts-types/AppButtonProps'

function App() {

  return (
      <div className="h-screen mx-0 my-0 xy-center-children space-x-2">
        <AppPrimaryButton variant={AppButtonStates.loading}>Submit</AppPrimaryButton>
        <AppSecondaryButton variant={AppButtonStates.loading}>Cancel</AppSecondaryButton>
      </div>
  )
}

export default App
