import './App.css'
import AppPrimaryButton from './elements/atoms/AppPrimaryButton'
import AppSecondaryButton from './elements/atoms/AppSecondaryButton'

function App() {

  return (
      <div className="h-screen container mx-0 my-0 px-4 flex justify-center items-center space-x-2">
       <AppPrimaryButton>Submit</AppPrimaryButton>
       <AppSecondaryButton>Cancel</AppSecondaryButton>
      </div>
  )
}

export default App
