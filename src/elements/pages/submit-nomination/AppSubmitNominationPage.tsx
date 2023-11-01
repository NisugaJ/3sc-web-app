/* eslint-disable @typescript-eslint/no-explicit-any */
import PageContainer from "../../templates/AppPageContainer";
import SubmitNominationStepOne from "./SubmitNominationStepOne";
import SubmitNominationStepThree from "./SubmitNominationStepThree";
import SubmitNominationStepTwo from "./SubmitNominationStepTwo";
import { useQueryParams } from "../../../utils.ts/commonUtils";
import SubmitNominationStepFour from "./SubmitNominationStepFour";
import SubmitNominationStepFinal from "./SubmitNominationStepFinal";
import { useForm } from "react-hook-form";
import { useSubmitNominationStore } from "../../../client-state/stores";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

function AppSubmitNominationPage() {
  const queryParams = useQueryParams();
  const state = useSubmitNominationStore();
  
  const schema = yup
    .object({
      nominee_id: yup.string().required(),
      reason: yup.string().required(),
      process: yup
        .string()
        .oneOf(["very_unfair", "unfair", "not_sure", "fair", "very_fair"]),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue    
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("nominee_id", state.nomination.nominee_id  as string);
    setValue("process", state.nomination.process as string);
    setValue("reason", state.nomination.reason as string);
    console.log("set_value", state.nomination);
    
  }, [state]);

  const onSubmit = (data: any) => {
    // checking the flow until 'onSubmit'
    console.log("submitting_data", data);
  }

  useEffect(() => {
    console.log();
    
    console.log("form_errors", errors.nominee_id?.message);
    console.log("form_errors", errors.process?.message);
    console.log("form_errors", errors.reason?.message);
  }, [errors]);

  return (
    <PageContainer>
      <div className=" xy-center-children space-x-4 space-y-5 flex-col">
        <div className="space-y-3 p-5 ">
          <form id="submit-nomination-form" onSubmit={handleSubmit(onSubmit)} >
            <div className="max-w-[880px] bg-white-primary p-10">
              <progress
                className="w-full rounded-none h-2 my-2"
                value={
                  queryParams.get("step") === "1"
                    ? 20
                    : queryParams.get("step") === "2"
                    ? 40
                    : queryParams.get("step") === "3"
                    ? 60
                    : queryParams.get("step") === "4"
                    ? 80
                    : queryParams.get("step") === "5"
                    ? 100
                    : 0
                }
                max="100"
              ></progress>

              {(queryParams.get("step") === "1" && (
                <SubmitNominationStepOne />
              )) ||
                (queryParams.get("step") === "2" && (
                  <SubmitNominationStepTwo />
                )) ||
                (queryParams.get("step") === "3" && (
                  <SubmitNominationStepThree />
                )) ||
                (queryParams.get("step") === "4" && (
                  <SubmitNominationStepFour />
                )) ||
                (queryParams.get("step") === "5" && (
                  <SubmitNominationStepFinal />
                ))}
            </div>
            <input
              type="text"
              value={state.nomination.nominee_id}
              {...register("nominee_id")}
              hidden
            />
            <input
              type="text"
              value={state.nomination.reason}
              {...register("reason")}
              hidden
            />
            <input
              type="text"
              value={state.nomination.process}
              {...register("process")}
              hidden
            />
          </form>
          {/* {JSON.stringify(state.nomination)} */}
        </div>
      </div>
    </PageContainer>
  );
}

export default AppSubmitNominationPage;
