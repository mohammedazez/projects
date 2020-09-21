import React from "react";
import { connect } from "react-redux";

function Header({ counter }) {
  return (
    <div>
      <h1>Header </h1>
      <h1>Total Counter:{counter}</h1>
    </div>
  );
}

// MapStateToProps untuk ambil data dari store
const mapStateToProps = ({ counter }) => {
  // console.log(props);
  return {
    counter: counter,
  };
};

export default connect(mapStateToProps)(Header);
