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
        placeholder="Enter reason"
      >
        <AppTextAreaInputField />
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
    </>
  );
};

export default SubmitNominationStepTwo;
