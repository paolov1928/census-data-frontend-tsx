import * as React from "react"
import { connect } from "react-redux"

import { IAppState } from "../store/Store"

import { ICensusStat } from "../reducers/censusStatReducer"

import Table from "../components/Table"
import DropDown from "../components/DropDown"

// Create the containers interface
interface IProps {
  censusStats: ICensusStat[]
}

class CensusStatList extends React.Component<IProps> {
  public render() {
    const { censusStats } = this.props
    return (
      <div className="page-container">
        <DropDown />
        <Table stats={censusStats} />
      </div>
    )
  }
}

// Grab the censusStats from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
  return {
    censusStats: store.censusStatState.censusStats
  }
}

export default connect(mapStateToProps)(CensusStatList)
