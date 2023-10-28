import { useCubeAcademyRetrieveNomineeList } from "../../query-components/nominationsApiComponents";
import { getAuthTokenFromEnv } from "../../utils/auth";
import LoadingSpinner from "../atoms/LoadingSpinner";

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
        console.log(import.meta.env.VITA_BEARER_AUTH_TOKEN);
        
        return <LoadingSpinner/>
    }
    
    return (
        <select className="select select-bordered w-auto  rounded-none">
            {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data?.data?.map((row: any) => {
                return (
                    <option>
                        {row.first_name} &nbsp;        
                        {row.last_name}
                    </option>
                )
            })
            }
        </select>
    )
}

export default NomineeListDropDown