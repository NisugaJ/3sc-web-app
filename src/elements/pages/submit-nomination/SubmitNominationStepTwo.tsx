import { useSubmitNominationStore } from '../../../client-state/stores';
import AppTextAreaInputField from '../../atoms/AppTextAreaInputField';
import AppInputContainer from '../../templates/AppInputContainer';


const SubmitNominationStepTwo = () => {
    const state = useSubmitNominationStore()

    return (
        <>
            <span className="label-text font-bold text-base">I’d like to nominate <span className="text-pink-primary">{state.selectedNomineeName}</span> because...</span>
            <p>Please let us know why you think this cube deserves the ‘cube of the month’ title 🏆⭐</p>

            <AppInputContainer
                labelText={<span> <span className="text-pink-primary font-bold">* </span>Reasoning</span>} placeholder='Enter reason'>  
                <AppTextAreaInputField />
            </AppInputContainer>
        </>
    )
}

export default SubmitNominationStepTwo