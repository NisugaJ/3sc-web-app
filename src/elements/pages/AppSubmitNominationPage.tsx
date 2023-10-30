
import AppPrimaryButton from '../atoms/AppPrimaryButton'
import AppInputElement from '../atoms/AppInputElement';
import NomineeListDropDown from '../molecules/NomineeListDropDown';
import PageContainer from '../templates/PageContainer';


function AppSubmitNominationPage() {

  return (
    <PageContainer>
      <div className=" xy-center-children space-x-4 space-y-5 flex-col">
        <div className='space-y-3 p-5 '>
          {/* <NomineeListDropDown />
          <AppInputElement type="textarea" labelText="Reason" bottomLeftLabel='Max. 300 words' placeholder='Enter reason' />
          <AppPrimaryButton> Submit</AppPrimaryButton>
          <AppSecondaryButton>Cancel</AppSecondaryButton> */}
          <div className="max-w-[880px] bg-white-primary p-10">
            <img src="assets/images/submit-nomination-image.png" alt="" />
            <div className="bg-white-primary py-5">
              <h1 className="text-[24px] font-bold uppercase ">I'd like to nominate....</h1>
              <p>Please select a cube who you feel has done something honourable this month or just all round has a great work ethic.</p>
              <form action="" className='py-2'>
                <NomineeListDropDown />

                <span className="label-text font-bold text-base">I’d like to nominate DAVID because...</span>
                <p>Please let us know why you think this cube deserves the ‘cube of the month’ title 🏆⭐</p>
                <AppInputElement type="textarea" labelText="" placeholder='Enter reason' />
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
