/* eslint-disable @typescript-eslint/no-explicit-any */

function ContentContainer(props: any) {

  return (
      <div className="min-h-[90vh] w-full py-10 px-4 content-container">
        <div className='space-y-3 '>
          {props.children}
        </div>
      </div>
  )
}

export default ContentContainer
