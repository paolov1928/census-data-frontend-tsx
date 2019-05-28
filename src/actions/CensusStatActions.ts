// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

// Import CensusStat Typing
import { ICensusStat, ICensusStatState } from '../reducers/censusStatReducer';
import { IAppState } from '../store/Store';

// Create Action Constants
export enum CensusStatActionTypes {
  GET_ALL = 'GET_ALL',
  CHANGE_QUERY = 'CHANGE_QUERY'
}

// Interface for Get All Action Type
export interface ICensusStatGetAllAction {
  type: CensusStatActionTypes.GET_ALL;
  censusStats: ICensusStat[];
}
// Interface for CHANGE_QUERY Action Type
export interface ICensusStatChangeQueryAction {
  type: CensusStatActionTypes.CHANGE_QUERY;
  censusQuery: string;
}

/*
Combine the action types with a union (we assume there are more)
example: export type CensusStatActions = IGetAllAction | IGetOneAction ...
*/
export type CensusStatActions = ICensusStatGetAllAction | ICensusStatChangeQueryAction

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getAllCensusStats: ActionCreator<
  ThunkAction<Promise<any>, ICensusStatState, null, ICensusStatGetAllAction>
> = (query: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`http://localhost:1337/api/censusDB?key=${query}`);
      dispatch({
        censusStats: response.data,
        type: CensusStatActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const changeQueryCensusStats = (censusQuery: string) : CensusStatActions => ({type: CensusStatActionTypes.CHANGE_QUERY, censusQuery: censusQuery})
