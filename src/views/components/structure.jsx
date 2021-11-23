import React, { Component, Fragment } from "react";

// rendering components if user is login or logout
import DefaultHome from "../home/home";
import UserDashboard from "../dashboard/dashboard";

class Structure extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      secTK: ""
    };
  }

  render() {
    return (
      <Fragment>
        {this.state.user ? <UserDashboard /> : <DefaultHome />}
      </Fragment>
    );
  }
}

export default Structure;
