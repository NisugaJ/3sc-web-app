import { useNavigate } from "react-router-dom";
import { useSubmitNominationStore } from "../../../client-state/stores";
import AppPrimaryButton from "../../atoms/AppPrimaryButton";
import AppSecondaryButton from "../../atoms/AppSecondaryButton";
import NomineeListDropDown from "../../molecules/NomineeListDropDown";
import AppInputContainer from "../../templates/AppInputContainer";

const SubmitNominationStepOne = () => {
  const state = useSubmitNominationStore();
  const navigate = useNavigate();

  return (
    <>
    <img src="/assets/images/submit-nomination-image.png" alt="" />
            <div className="bg-white-primary py-5">
      <h1 className="text-[24px] font-bold uppercase ">
        I'd like to nominate....
      </h1>
      <p>
        Please select a cube who you feel has done something honourable this
        month or just all round has a great work ethic.
      </p>

      <AppInputContainer
        labelText={
          <span>
            {" "}
            <span className="text-pink-primary font-bold ">* </span>Nominee
          </span>
        }
        placeholder="Select a nominee"
        className="max-w-sm my-5"
      >
        <NomineeListDropDown
          onChange={(selectedOption: { label: string; value: string }) =>{
            state.updateSelectedNomineeName(selectedOption.label.split(" ")[0])
            state.updateNomination({
              key: "nominee_id",
              value: selectedOption.value,
            })
          }
          }
        />
      </AppInputContainer>

      <div className="pt-3 xy-center-children justify-between">
        <AppSecondaryButton
          onClick={() => {
            navigate("/");
          }}
        >
          Cancel
        </AppSecondaryButton>
        <AppPrimaryButton
          onClick={() => {
            navigate("/submit-nomination?step=2");
          }}
        >
          Next
        </AppPrimaryButton>
      </div>
    </div>
    </>
  );
};

export default SubmitNominationStepOne;
