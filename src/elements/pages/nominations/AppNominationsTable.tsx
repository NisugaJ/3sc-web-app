import { NavLink } from "react-router-dom";
import {
  useCubeAcademyGetAllNominations,
  useCubeAcademyRetrieveNomineeList,
} from "../../../query-components/nominationsApiComponents";
import {
  formatProcessTypeForDisplay,
  isClosingDateInThePast,
} from "../../../utils.ts/commonUtils";
import { getAuthTokenFromEnv } from "../../../utils/auth";
import AppLoadingSpinner from "../../atoms/AppLoadingSpinner";
import AppPrimaryButton from "../../atoms/AppPrimaryButton";
import DeleteIcon from "../../atoms/DeleteIcon";
import EditIcon from "../../atoms/EditIcon";

const AppNominationsTable = (props: {
  onlyClosedNominations?: boolean | false;
}) => {
  const { data, error, isLoading } = useCubeAcademyGetAllNominations({
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getAuthTokenFromEnv()}`,
    },
  });

  const nomineeListQuery = useCubeAcademyRetrieveNomineeList({
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getAuthTokenFromEnv()}`,
    },
  });

  if (error || nomineeListQuery.error) {
    console.error(error);
  }

  if (isLoading || nomineeListQuery.isLoading) {
    return <AppLoadingSpinner />;
  }

  /**
   * Retrieves the full name of a nominee based on their ID.
   *
   * @param {string | undefined} nomineeId - The ID of the nominee.
   * @return {string} The full name of the nominee, or an empty string if the ID is not provided.
   */
  const getNoimneeName = (nomineeId: string | undefined): string => {
    if (!nomineeId) {
      return "";
    }
    const nominee = nomineeListQuery.data?.data?.find(
      (nominee) => nominee.nominee_id == nomineeId
    );
    return nominee?.first_name + " " + nominee?.last_name;
  };

  return (
    <div className="overflow-x-auto xy-center-children  py-5">
      {/* table will be displayed only if screen width is greater than 768px. If screen width is less than 768px, table will be hidden and list of nominations will be displayed. See the next element after this table element */}
      <table className="table zero:max-md:hidden">
        <thead className="">
          <tr className="text-black-primary uppercase">
            <th>Nominee</th>
            <th>Date Submitted</th>
            <th>Closing Date</th>
            <th>Reason</th>
            <th>Process</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="font-mono">
          {nomineeListQuery.data?.data &&
            data?.data
              ?.filter(
                (nomination) =>
                  props.onlyClosedNominations &&
                  isClosingDateInThePast(nomination.closing_date)
              )
              .map((nomination) => (
                <tr>
                  <td>{getNoimneeName(nomination.nominee_id)}</td>
                  <td>{nomination.date_submitted}</td>
                  <td>{nomination.closing_date}</td>
                  <td className="max-w-[300px]">{nomination.reason}</td>
                  <td>{formatProcessTypeForDisplay(nomination.process)}</td>
                  <td>
                    <AppPrimaryButton additionalClassNames="w-auto outline-none">
                      <DeleteIcon />
                    </AppPrimaryButton>
                  </td>
                  <td>
                    <NavLink to={`/nomination/edit${nomination.nominee_id}`}>
                      <EditIcon />
                    </NavLink>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>

      {/* if screen width is less than 768px, table will be hidden and list of nominations will be displayed here */}
      <div className="md:max-2xl:hidden">
        {nomineeListQuery.data?.data &&
          data?.data
            ?.filter(
              (nomination) =>
                props.onlyClosedNominations &&
                isClosingDateInThePast(nomination.closing_date)
            )
            .map((nomination) => (
              <div className="card w-full  shadow-md">
                <div className="card-body p-[1rem]">
                  <h2 className="card-title">
                    {getNoimneeName(nomination.nominee_id)}
                  </h2>
                  <div className="xy-center-children">
                    <div>
                      <p className="max-w-[300px] mr-5">{nomination.reason?.slice(0, 50).concat("...")}</p>
                    </div>
                    <div className=" p-2  xy-center-children space-x-2 ">
                      <AppPrimaryButton additionalClassNames="w-auto outline-none">
                        <DeleteIcon />
                      </AppPrimaryButton>
                      <NavLink to={`/nomination/edit${nomination.nominee_id}`}>
                        <EditIcon />
                      </NavLink>
                    </div>
                  </div>
                  <div className="card-actions justify-start">
                    <p className="text-xs">
                      {isClosingDateInThePast(nomination.closing_date)
                        ? "Closed on " + nomination.closing_date
                        : "Closing on " + nomination.closing_date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default AppNominationsTable;
