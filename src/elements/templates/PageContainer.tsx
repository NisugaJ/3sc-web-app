/* eslint-disable @typescript-eslint/no-explicit-any */

import AppFooter from "../organisms/AppFooter";
import AppHeader from "../organisms/AppHeader";
import ContentContainer from "./ContentContainer";

function PageContainer(props: any) {

  return (
    <>
      <AppHeader {...props}/>
        <ContentContainer {...props}/>
      <AppFooter {...props}/>
    </>
  )
}

export default PageContainer
