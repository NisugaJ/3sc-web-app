/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'
import { Nomination } from '../query-components/nominationsApiRequestBodies'
import { immer } from 'zustand/middleware/immer'
import { produce } from 'immer'



interface SubmitNominationState {
  nomination: Nomination
  selectedNomineeName: string
  updateSelectedNomineeName: (by: string) => void
  updateNomination: (by:  {key:string, value :string}) => void
}

const useSubmitNominationStore = create<SubmitNominationState>()(
  immer((set) => 
  ({
      nomination: {
        nominee_id: '',
        reason: '',
        process: '',
      },
      selectedNomineeName: 'David',
      updateSelectedNomineeName: (by) => set((state) => ({ ...state, selectedNomineeName:  by })),
      updateNomination: (by: {key:string, value :string}) => set(produce((state) => {(
        state.nomination[by.key] = by.value
      )})),
  }))
)

export {
  useSubmitNominationStore
}
