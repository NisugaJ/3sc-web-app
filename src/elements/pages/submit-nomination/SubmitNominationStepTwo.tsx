/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useSubmitNominationStore } from "../../../client-state/stores";
import AppPrimaryButton from "../../atoms/AppPrimaryButton";
import AppSecondaryButton from "../../atoms/AppSecondaryButton";
import AppTextAreaInputField from "../../atoms/AppTextAreaInputField";
import AppInputContainer from "../../templates/AppInputContainer";

const SubmitNominationStepTwo = () => {
  const state = useSubmitNominationStore();
  const navigate = useNavigate();

  return (
    <>
    <img src="/assets/images/submit-nomination-image.png" alt="" />
            <div className="bg-white-primary py-5">
      <span className="label-text font-bold text-base">
        I’d like to nominate{" "}
        <span className="text-pink-primary">{state.selectedNomineeName}</span>{" "}
        because...
      </span>
      <p>
        Please let us know why you think this cube deserves the ‘cube of the
        month’ title 🏆⭐
      </p>

      <AppInputContainer
        labelText={
          <span>
            {" "}
            <span className="text-pink-primary font-bold">* </span>Reasoning
          </span>
        }
        className="my-5"
        placeholder="Enter reason"
      >
        <AppTextAreaInputField onChange={(event: any) =>{
          state.updateNomination({
            key: "reason",
            value: event?.target?.value
          })
          }} />
      </AppInputContainer>

      <div className="pt-3 xy-center-children justify-between">
        <AppSecondaryButton
          onClick={() => {
            navigate("/submit-nomination?step=1");
          }}
        >
          Back
        </AppSecondaryButton>

        <AppPrimaryButton
          onClick={() => {
            navigate("/submit-nomination?step=3");
          }}
        >
          Next
        </AppPrimaryButton>
      </div>
    </div>
    </>
  );
};

export default SubmitNominationStepTwo;
