import PageContainer from "../../templates/AppPageContainer";
import SubmitNominationStepOne from "./SubmitNominationStepOne";
import SubmitNominationStepThree from "./SubmitNominationStepThree";
import SubmitNominationStepTwo from "./SubmitNominationStepTwo";
import { useQueryParams } from "../../../utils.ts/commonUtils";

function AppSubmitNominationPage() {
  const queryParams = useQueryParams();

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
            <img src="/assets/images/submit-nomination-image.png" alt="" />
            <div className="bg-white-primary py-5">
              
            {
              queryParams.get('step') === '1' && <SubmitNominationStepOne />
              ||
              queryParams.get('step') === '2' && <SubmitNominationStepTwo />
              ||
              queryParams.get('step') === '3' && <SubmitNominationStepThree />
            }
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default AppSubmitNominationPage;
