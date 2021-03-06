// Import Reducer type
import { Reducer } from "redux"
import {
  CensusStatActions,
  CensusStatActionTypes
} from "../actions/CensusStatActions"

// Define the censusStat object type
export interface ICensusStat {
  Variable: string
  Count: number
  Average_Age: number
}

// Define the CensusStat State
export interface ICensusStatState {
  readonly censusStats: ICensusStat[]
}

// Define the initial state
const initialCensusStatState: ICensusStatState = {
  censusStats: []
}

export const censusStatReducer: Reducer<ICensusStatState, CensusStatActions> = (
  state = initialCensusStatState,
  action
) => {
  switch (action.type) {
    case CensusStatActionTypes.GET_ALL: {
      return {
        ...state,
        censusStats: action.censusStats
      }
    }
    default:
      return state
  }
}
