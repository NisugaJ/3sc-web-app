
import AppPrimaryButton from '../atoms/AppPrimaryButton'
import AppSecondaryButton from '../atoms/AppSecondaryButton'
import NomineeListDropDown from '../molecules/NomineeListDropDown';
import AppInputElement from '../atoms/AppInputElement';

function Home() {

  return (
      <div className=" xy-center-children space-x-4 space-y-5 flex-col">
        <div className='space-y-3 '>
          <NomineeListDropDown />
          <AppInputElement type="textarea" labelText="Reason" bottomLeftLabel='Max. 300 words' placeholder='Enter reason' />
          <AppPrimaryButton> Submit</AppPrimaryButton>
          <AppSecondaryButton>Cancel</AppSecondaryButton>
        </div>
      </div>
  )
}

export default Home
