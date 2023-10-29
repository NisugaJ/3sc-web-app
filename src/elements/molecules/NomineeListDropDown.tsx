import { useCubeAcademyRetrieveNomineeList } from "../../query-components/nominationsApiComponents";
import { getAuthTokenFromEnv } from "../../utils/auth";
import AppSelectInputField from "../atoms/AppSelectInputField";
import AppLoadingSpinner from "../atoms/AppLoadingSpinner";

const NomineeListDropDown = () => {

    const { data, error, isLoading } = useCubeAcademyRetrieveNomineeList({
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${getAuthTokenFromEnv()}`
        }
    });

    if (error) {
        return (
            <div>
                <h3>{error.status}</h3>
                <p>{error.payload}</p>
            </div>
        );
    }

    if (isLoading) {
        return <AppLoadingSpinner/>
    }
    
    return (
        <AppSelectInputField 
            name="nominee" 
            id="nominee" 
            onChange={() => { console.log('option changed') }} 
            options={
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data?.data?.map((row: any) => { return { label: `${row.first_name} ${row.last_name}`, value: row.nominee_id.toString() } })
            } 
        />

    )
}

export default NomineeListDropDown