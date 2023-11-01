/* eslint-disable @typescript-eslint/no-explicit-any */

function AppContentContainer(props: any) {
  return (
    <div className="content-container-wrapper">
      <div className="min-h-[95vh] w-full py-10 px-4 content-container">
        <div className="space-y-3 ">{props.children}</div>
      </div>
    </div>
  );
}

export default AppContentContainer;
