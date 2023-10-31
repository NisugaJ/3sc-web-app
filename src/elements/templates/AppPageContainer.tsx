/* eslint-disable @typescript-eslint/no-explicit-any */

import AppFooter from "../organisms/AppFooter";
import AppHeader from "../organisms/AppHeader";
import AppContentContainer from "./AppContentContainer";

function AppPageContainer(props: any) {

  return (
    <>
      <AppHeader {...props}/>
        <AppContentContainer {...props}/>
      <AppFooter {...props}/>
    </>
  )
}

export default AppPageContainer
