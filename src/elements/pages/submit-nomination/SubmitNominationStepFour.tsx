import AppPrimaryButton from "../../atoms/AppPrimaryButton";
import AppSecondaryButton from "../../atoms/AppSecondaryButton";
import { useNavigate } from "react-router-dom";

const SubmitNominationStepFour = () => {
  const navigate = useNavigate();
  // const state = useSubmitNominationStore();

  return (
    <div>
      <img src="/assets/images/submit-nomination-image.png" alt="" />
      <div className="bg-white-primary py-5">
        <span className="label-text font-bold text-base uppercase">
          nomination overview
        </span>
        <p className="font-mono">
          As you know, out the nominees chosen, we spin a wheel to pick the cube
          of the month. What’s your opinion on this method?
        </p>
        <div className="w-full px-8 py-10"></div>
        <div className="pt-3 xy-center-children justify-between">
          <AppSecondaryButton
            onClick={() => {
              navigate("/submit-nomination?step=3");
            }}
          >
            Back
          </AppSecondaryButton>
          <AppPrimaryButton
            // onClick={() => {
            //   // submit the new nomination here

            //   // navigate to the successful completion page
            //   navigate("/submit-nomination?step=5");
            // }}
            type="submit"
            form="submit-nomination-form"
          >
            Submit
          </AppPrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default SubmitNominationStepFour;
