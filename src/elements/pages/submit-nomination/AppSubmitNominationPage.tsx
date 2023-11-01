import AppPrimaryButton from "../../atoms/AppPrimaryButton";
import AppSecondaryButton from "../../atoms/AppSecondaryButton";
import PageContainer from "../../templates/AppPageContainer";
import SubmitNominationStepOne from "./SubmitNominationStepOne";
import SubmitNominationStepThree from "./SubmitNominationStepThree";
import SubmitNominationStepTwo from "./SubmitNominationStepTwo";

function AppSubmitNominationPage() {
  return (
    <PageContainer>
      <div className=" xy-center-children space-x-4 space-y-5 flex-col">
        <div className="space-y-3 p-5 ">
          {/* <NomineeListDropDown />
          <AppInputElement type="textarea" labelText="Reason" bottomLeftLabel='Max. 300 words' placeholder='Enter reason' />
           */}
          <div className="max-w-[880px] bg-white-primary p-10">
            <progress
              className="w-full rounded-none h-2 my-2"
              value={20}
              max="100"
            ></progress>
            <img src="assets/images/submit-nomination-image.png" alt="" />
            <div className="bg-white-primary py-5">
              <form action="" className="py-2">
                <SubmitNominationStepOne />

                <SubmitNominationStepTwo />

                <SubmitNominationStepThree />

                <AppPrimaryButton> Next</AppPrimaryButton>
                <AppSecondaryButton>Cancel</AppSecondaryButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default AppSubmitNominationPage;
