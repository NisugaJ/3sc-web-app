import { NavLink } from "react-router-dom";
import {
  useCubeAcademyGetAllNominations,
  useCubeAcademyRetrieveNomineeList,
} from "../../../query-components/nominationsApiComponents";
import { formatProcessTypeForDisplay } from "../../../utils.ts/commonUtils";
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
      <table className="table ">
        <thead>
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
                  +new Date() > +new Date(nomination?.closing_date as string)
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
    </div>
  );
};

export default AppNominationsTable;
