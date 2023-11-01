import { useSubmitNominationStore } from '../../../client-state/stores';
import NomineeListDropDown from '../../molecules/NomineeListDropDown';
import AppInputContainer from '../../templates/AppInputContainer';


const SubmitNominationStepOne = () => {
    const state = useSubmitNominationStore()

    return (
        <>
            <h1 className="text-[24px] font-bold uppercase ">I'd like to nominate....</h1>
            <p>Please select a cube who you feel has done something honourable this month or just all round has a great work ethic.</p>

            <AppInputContainer
                labelText={<span> <span className="text-pink-primary font-bold">* </span>Nominee</span>}
                placeholder='Select a nominee'
                className="max-w-xs"
            >
                <NomineeListDropDown onChange={(selectedOption: { label: string, value: string }) => state.updateSelectedNomineeName(selectedOption.label.split(' ')[0])} />
            </AppInputContainer>
        </>

    )
}

export default SubmitNominationStepOne