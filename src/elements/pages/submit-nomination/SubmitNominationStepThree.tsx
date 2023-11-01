import { useEffect, useState } from "react";
import { useSubmitNominationStore } from "../../../client-state/stores";
import ProcessTypes from "../../../ts-types/enums/ProcessTypes";
import classNames from "classnames";
import AppPrimaryButton from "../../atoms/AppPrimaryButton";
import AppSecondaryButton from "../../atoms/AppSecondaryButton";
import { useNavigate } from "react-router-dom";

const SubmitNominationStepThree = () => {
  const navigate = useNavigate();
  const ratingName = "process";
  const state = useSubmitNominationStore();
  const [processScale, setProcessScale] = useState(0);

  useEffect(() => {
    console.log(state.nomination);

    switch (state.nomination.process) {
      case ProcessTypes.very_unfair:
        setProcessScale(1);
        break;
      case ProcessTypes.unfair:
        setProcessScale(2);
        break;
      case ProcessTypes.not_sure:
        setProcessScale(3);
        break;
      case ProcessTypes.fair:
        setProcessScale(4);
        break;
      case ProcessTypes.very_fair:
        setProcessScale(5);
        break;
      default:
        setProcessScale(3);
        break;
    }
  }, [state]);

  const updateProcess = (value: string) => {
    state.updateNomination({
      key: ratingName,
      value: value,
    });
  };

  return (
    <div>
      <span className="label-text font-bold text-base">
        IS HOW WE CURRENTLY RUN CUBE OF THE MONTH FAIR?
      </span>
      <p className="font-mono">
        As you know, out the nominees chosen, we spin a wheel to pick the cube
        of the month. What’s your opinion on this method?
      </p>
      <div className="w-full px-8 py-10">
        <input
          type="range"
          min={1}
          max="5"
          value={processScale}
          defaultValue={0}
          className="w-full"
          disabled
        />
        <div className=" w-full flex justify-between py-5">
          <div className="xy-center-children flex-col">
            <div
              className={classNames(
                "bg-gray-light w-[60px] m-[4px] p-[13px] cursor-pointer hover:outline hover:outline-pink-primary",
                {
                  "outline outline-3 outline-pink-primary":
                    state.nomination.process === ProcessTypes.very_unfair,
                }
              )}
              onClick={() => updateProcess(ProcessTypes.very_unfair)}
            >
              <img src="/assets/images/submit-nomination/process-icons/very-unfair.svg" />
            </div>
            <span className="font-mono">Very unfair</span>
          </div>
          <div className="xy-center-children flex-col">
            <div
              className={classNames(
                "bg-gray-light w-[60px] m-[4px] p-[13px]  cursor-pointer hover:outline hover:outline-pink-primary",
                {
                  "outline outline-3 outline-pink-primary ":
                    state.nomination.process === ProcessTypes.unfair,
                }
              )}
              onClick={() => updateProcess(ProcessTypes.unfair)}
            >
              <img src="/assets/images/submit-nomination/process-icons/unfair.svg" />
            </div>
            <span className="font-mono">Unfair</span>
          </div>
          <div className="xy-center-children flex-col">
            <div
              className={classNames(
                "bg-gray-light w-[60px] m-[4px] p-[13px]  cursor-pointer hover:outline hover:outline-pink-primary",
                {
                  "outline outline-3 outline-pink-primary ":
                    state.nomination.process === ProcessTypes.not_sure,
                }
              )}
              onClick={() => updateProcess(ProcessTypes.not_sure)}
            >
              <img src="/assets/images/submit-nomination/process-icons/not-sure.svg" />
            </div>
            <span className="font-mono">Not sure</span>
          </div>
          <div className="xy-center-children flex-col">
            <div
              className={classNames(
                "bg-gray-light w-[60px] m-[4px] p-[13px]  cursor-pointer hover:outline hover:outline-pink-primary",
                {
                  "outline outline-3 outline-pink-primary ":
                    state.nomination.process === ProcessTypes.fair,
                }
              )}
              onClick={() => updateProcess(ProcessTypes.fair)}
            >
              <img src="/assets/images/submit-nomination/process-icons/fair.svg" />
            </div>
            <span className="font-mono">Fair</span>
          </div>
          <div className="xy-center-children flex-col">
            <div
              className={classNames(
                "bg-gray-light w-[60px] m-[4px] p-[13px]  cursor-pointer hover:outline hover:outline-pink-primary",
                {
                  "outline outline-3 outline-pink-primary ":
                    state.nomination.process === ProcessTypes.very_fair,
                }
              )}
              onClick={() => updateProcess(ProcessTypes.very_fair)}
            >
              <img src="/assets/images/submit-nomination/process-icons/very-fair.svg" />
            </div>
            <span className="font-mono">Very fair</span>
          </div>
        </div>
      </div>
      <div className="pt-3 xy-center-children justify-between">
        <AppSecondaryButton
          onClick={() => {
            navigate("/submit-nomination?step=2");
          }}
        >
          Back
        </AppSecondaryButton>
        <AppPrimaryButton onClick={() => navigate("/submit-nomination?step=4")}>
          Next
        </AppPrimaryButton>
      </div>
    </div>
  );
};

export default SubmitNominationStepThree;
