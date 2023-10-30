import { useRouteError } from "react-router-dom";
import PageContainer from "../templates/PageContainer";

export default function AppErrorPage() {
  const error = useRouteError() as { statusText?: string, message?: string };
  console.error(error);

  return (
    <PageContainer>
      <div id="error-page-content" className="h-[75vh] xy-center-children flex-col">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </PageContainer>
  );
}