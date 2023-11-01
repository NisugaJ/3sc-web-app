import AppPageContainer from "../../templates/AppPageContainer";
import AppPrimaryButton from "../../atoms/AppPrimaryButton";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import AppNominationsTable from "./AppNominationsTable";


import 'react-tabs/style/react-tabs.css';

const AppNominationsPage = () => {

  return (
    <AppPageContainer>
      <div className="mx-28 px-5 py-5 bg-white-primary">
        <span className="text-3xl uppercase font-bold">Your Nominations</span>
        <Tabs className="py-5" >
          <TabList>
            <Tab >
              <AppPrimaryButton additionalClassNames="w-auto bg-white-primary drop-shadow-md">
                Current
              </AppPrimaryButton>
            </Tab>
            <Tab>
              <AppPrimaryButton additionalClassNames="w-auto bg-green-primary drop-shadow-md">
                Closed
              </AppPrimaryButton>
            </Tab>
          </TabList>

          <TabPanel>
            <AppNominationsTable  />
          </TabPanel>
          <TabPanel>
            <AppNominationsTable  onlyClosedNominations/>
          </TabPanel>
        </Tabs>
      </div>
    </AppPageContainer>
  );
};

export default AppNominationsPage;
