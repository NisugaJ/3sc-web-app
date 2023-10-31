/* eslint-disable @typescript-eslint/no-explicit-any */
import NomineeListDropDown from '../../molecules/NomineeListDropDown';
import AppInputContainer from '../../templates/AppInputContainer';


const SubmitNominationStepOne = (props: any) => {

    return (
        <AppInputContainer
            labelText={<span> <span className="text-pink-primary font-bold">* </span>Nominee</span>}
            placeholder='Select a nominee'
            className="max-w-xs"
        >
            <NomineeListDropDown onChange={(selectedOption: { label: string, value: string }) => props.state.updateSelectedNomineeName(selectedOption.label.split(' ')[0])} />
        </AppInputContainer>
    )
}

export default SubmitNominationStepOne