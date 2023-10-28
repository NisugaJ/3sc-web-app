import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import AppPrimaryButton from './elements/atoms/AppPrimaryButton'
import AppSecondaryButton from './elements/atoms/AppSecondaryButton'

function App() {
  const queryClient: QueryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen mx-0 my-0 xy-center-children space-x-2">
        <AppPrimaryButton> Submit</AppPrimaryButton>
        <AppSecondaryButton>Cancel</AppSecondaryButton>
      </div>
    </QueryClientProvider>
  )
}

export default App
