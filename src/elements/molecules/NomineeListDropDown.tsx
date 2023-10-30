import { useCubeAcademyRetrieveNomineeList } from "../../query-components/nominationsApiComponents";
import { getAuthTokenFromEnv } from "../../utils/auth";
import AppInputElement from "../atoms/AppInputElement";
import AppLoadingSpinner from "../atoms/AppLoadingSpinner";

const NomineeListDropDown = () => {

    const { data, error, isLoading } = useCubeAcademyRetrieveNomineeList({
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${getAuthTokenFromEnv()}`
        }
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const options = data?.data?.map((row: any) => { return { label: `${row.first_name} ${row.last_name}`, value: row.nominee_id.toString() } })

    if (error) {
        return (
            <div>
                <h3>{error.status}</h3>
                <p>{error.payload}</p>
            </div>
        );
    }

    if (isLoading) {
        return (
            <AppLoadingSpinner/> 
        )
    }

    return (
        <AppInputElement
            type="select"
            labelText="Nominee"
            // bottomLeftLabel='' 
            placeholder='Select a nominee'
            otherField={{ 'options': options }}
        />
    )
}

export default NomineeListDropDown