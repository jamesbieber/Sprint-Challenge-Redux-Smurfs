import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/index";

class SmurfForm extends React.Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addSmurf = event => {
    event.preventDefault();

    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    this.props.addSmurf(smurf);

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleChanges}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleChanges}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleChanges}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village!</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);
