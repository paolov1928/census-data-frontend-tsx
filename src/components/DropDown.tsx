import * as React from "react"

import { connect } from 'react-redux';

import { IAppState } from '../store/Store';

import { ICensusStat } from '../reducers/censusStatReducer';
import { getAllCensusStats } from '../actions/CensusStatActions';
// Create the containers interface
interface IProps {
  getAllCensusStats: any;
}


class DropDown extends React.Component<IProps> {
  selection = [
    "education",
    "age",
    "sex",
    "fulltime",
    "weight",
    "citizenship",
    "year"
  ]

  render() {
    return (
      <div className="dropdown">
        <select
          className="dropdown-select"
          onChange={e => {
            this.props.getAllCensusStats(e.target.value)
          }}
        >
          {this.selection.map((q, i) => (
            <option key={i} value={q}>
              {q}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

// Grab the censusStats from the store and make them available on props
const mapDispatchToProps = {
  getAllCensusStats,
};


export default connect(null, mapDispatchToProps)(DropDown);
