
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import AppPrimaryButton from './elements/atoms/AppPrimaryButton'
import AppSecondaryButton from './elements/atoms/AppSecondaryButton'
import NomineeListDropDown from './elements/molecules/NomineeListDropDown';

function App() {
  const queryClient: QueryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen mx-0 my-0 xy-center-children space-x-4 space-y-5 flex-col">
        <NomineeListDropDown/>
        <div className='space-y-3 '>
          <AppPrimaryButton> Submit</AppPrimaryButton>
          <AppSecondaryButton>Cancel</AppSecondaryButton>
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App
