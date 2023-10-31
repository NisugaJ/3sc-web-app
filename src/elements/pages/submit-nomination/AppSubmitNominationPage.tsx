/* eslint-disable @typescript-eslint/no-explicit-any */

import AppPrimaryButton from '../../atoms/AppPrimaryButton'
import NomineeListDropDown from '../../molecules/NomineeListDropDown';
import PageContainer from '../../templates/AppPageContainer';
import { useSubmitNominationStore } from '../../../client-state/stores';
import AppInputContainer from '../../templates/AppInputContainer';
import AppTextAreaInputField from '../../atoms/AppTextAreaInputField';


function AppSubmitNominationPage() {
  const state = useSubmitNominationStore()

  return (
    <PageContainer>
      <div className=" xy-center-children space-x-4 space-y-5 flex-col">
        <div className='space-y-3 p-5 '>
          {/* <NomineeListDropDown />
          <AppInputElement type="textarea" labelText="Reason" bottomLeftLabel='Max. 300 words' placeholder='Enter reason' />
          <AppPrimaryButton> Submit</AppPrimaryButton>
          <AppSecondaryButton>Cancel</AppSecondaryButton> */}
          <div className="max-w-[880px] bg-white-primary p-10">
            <progress className="w-full rounded-none h-2 my-2" value={20} max="100"></progress>
            <img src="assets/images/submit-nomination-image.png" alt="" />
            <div className="bg-white-primary py-5">
              <h1 className="text-[24px] font-bold uppercase ">I'd like to nominate....</h1>
              <p>Please select a cube who you feel has done something honourable this month or just all round has a great work ethic.</p>
              <form action="" className='py-2'>

                
                <div className="divider py-5" />
                <span className="label-text font-bold text-base">I’d like to nominate <span className="text-pink-primary">{state.selectedNomineeName}</span> because...</span>
                <p>Please let us know why you think this cube deserves the ‘cube of the month’ title 🏆⭐</p>

                <AppInputContainer
                  labelText={<span> <span className="text-pink-primary font-bold">* </span>Reasoning</span>} placeholder='Enter reason'>
                  <AppTextAreaInputField />
                </AppInputContainer>
                <AppPrimaryButton>Get Started</AppPrimaryButton>        
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default AppSubmitNominationPage
