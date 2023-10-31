/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'

interface SubmitNominationState {
  fields: {
      id: string
      value: any
  }[]
  selectedNomineeName: string,
  updateSelectedNomineeName: (by: string) => void
}

const useSubmitNominationStore = create<SubmitNominationState>((set) => 
    ({
        fields: [],
        selectedNomineeName: 'David',
        updateSelectedNomineeName: (by) => set((state) => ({ ...state, selectedNomineeName:  by })),
    }),
)

export {
  useSubmitNominationStore
}