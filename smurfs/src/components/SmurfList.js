import React from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

class SmurfList extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="Smurf-list">
        {this.props.smurfs.map(smurf => {
          return (
            <Smurf name={smurf.name} age={smurf.age} height={smurf.height} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList);
