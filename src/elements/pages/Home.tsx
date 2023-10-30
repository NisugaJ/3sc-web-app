
// import AppPrimaryButton from '../atoms/AppPrimaryButton'
// import AppSecondaryButton from '../atoms/AppSecondaryButton'
// import NomineeListDropDown from '../molecules/NomineeListDropDown';
// import AppInputElement from '../atoms/AppInputElement';

import AppPrimaryButton from "../atoms/AppPrimaryButton"
import { NavLink } from "react-router-dom";

function Home() {

  return (
    <div className=" xy-center-children space-x-4 space-y-5 flex-col">
      <div className='space-y-3 '>
        {/* <NomineeListDropDown />
          <AppInputElement type="textarea" labelText="Reason" bottomLeftLabel='Max. 300 words' placeholder='Enter reason' />
          <AppPrimaryButton> Submit</AppPrimaryButton>
          <AppSecondaryButton>Cancel</AppSecondaryButton> */}
        <div className="max-w-3xl">
          <img src="assets/images/intro-image.png" alt="" />
          <div className="hero bg-white-primary">
            <div className="hero-content flex-col px-16 py-7">
              <h1 className="text-[32px] font-bold uppercase text-center">Cube of the month - Nominations</h1>
              <p className="py-2 text-center font-mono">At cube we’re passionate about recognising the great work that our cubes do. Each month one of our cubes are crowned cube of the month 👑⭐. Please nominate who you think deserves this months title.</p>

              <NavLink
                to="/submit-nomination"
              >
                <AppPrimaryButton >
                  Get Started
                </AppPrimaryButton>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
