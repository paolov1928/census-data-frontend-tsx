// Import redux types
import { ActionCreator, Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
// Axios > the built in fetch command
import axios from "axios"

// Import CensusStat Typing
import { ICensusStat, ICensusStatState } from "../reducers/censusStatReducer"

// Create Action Constants
export enum CensusStatActionTypes {
  GET_ALL = "GET_ALL"
}

// Interface for Get All Action Type
export interface ICensusStatGetAllAction {
  type: CensusStatActionTypes.GET_ALL
  censusStats: ICensusStat[]
}
// Interface for CHANGE_QUERY Action Type

/*
Combine the action types with a union (we assume there are more)
example: export type CensusStatActions = IGetAllAction | IGetOneAction ...
*/
export type CensusStatActions = ICensusStatGetAllAction

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getAllCensusStats: ActionCreator<
  ThunkAction<Promise<any>, ICensusStatState, null, ICensusStatGetAllAction>
> = (query: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:1337/api/censusDB?key=${query}`
      )
      dispatch({
        censusStats: response.data,
        type: CensusStatActionTypes.GET_ALL
      })
    } catch (err) {
      console.error(err)
    }
  }
}
