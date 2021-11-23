import React, { Fragment } from "react";

// custom components
import Header from "../components/header/appbar";

export default function DefaultHome(props) {
  return (
    <Fragment>
      <Header />
      <h3> Home page </h3>
    </Fragment>
  );
}
