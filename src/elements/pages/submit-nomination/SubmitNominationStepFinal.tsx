import { useNavigate } from "react-router-dom";
import AppSecondaryButton from "../../atoms/AppSecondaryButton";

const SubmitNominationStepFinal = () => {
  const navigate = useNavigate();
  // const state = useSubmitNominationStore();



  return (
    <div>
      <img src="/assets/images/submit-nomination-image.png" alt="" />
      <div className="bg-white-primary py-5">
        <span className="label-text font-bold text-base">
        NOMINATION SUBMITTED
        </span>
        <p className="font-mono">
        Thank you for taking the time to fill out this form! Why not nominate another cube?
        </p>
        <div className="pt-3 xy-center-children space-x-3">
          <AppSecondaryButton
            onClick={() => navigate("/nominations")}
          >
            View nominations
          </AppSecondaryButton>
          <AppSecondaryButton
            onClick={() => navigate("/submit-nomination?step=1")}
          >
            Create new nomination
          </AppSecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default SubmitNominationStepFinal;
