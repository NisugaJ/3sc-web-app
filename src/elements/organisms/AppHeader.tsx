import { NavLink } from "react-router-dom"
import { useCubeAcademyGetAllNominations } from "../../query-components/nominationsApiComponents"
import { getAuthTokenFromEnv } from "../../utils/auth"

const AppHeader = () => {
    const { data, error, isLoading} = useCubeAcademyGetAllNominations({
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${getAuthTokenFromEnv()}`
        }
    })
    const nominationCount = data?.data?.length as number | undefined | 0

    if (error) {
        console.error(error);
    }

    if (isLoading) {
        console.log('Waiting for useCubeAcademyGetAllNominations...');
    }

    return (
        <div className="navbar  h-[72px] bg-black-primary">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl" href="/">
                    <img className="text-pink-primary zero:max-md:hidden" src="/assets/images/header-logo/header-logo.svg" alt="" />
                    <img className="text-pink-primary md:max-2xl:hidden" src="/assets/images/header-logo/header-logo-only.svg" alt="" />
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink
                            to="/nominations"
                            className="text-white-primary underline font-mono font-bold"
                        >
                            Your nominations ({nominationCount})
                        </NavLink>
                    </li>
                    <li>
                        <details>
                            <summary className="text-white-primary font-mono font-bold ">
                                Account
                            </summary>
                            <ul className="p-2 bg-base-100">
                                <li><a >View Account</a></li>
                                <li><a >Logout</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AppHeader

