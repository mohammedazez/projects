import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const counterSelector = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Header </h1>
      <h1>Total Counter:{counterSelector}</h1>
    </div>
  );
}
export default Header;

// import { connect } from "react-redux";
// MapStateToProps untuk ambil data dari store
// const mapStateToProps = ({ counter }) => {
//   // console.log(props);
//   return {
//     counter: counter,
//   };
// };

// export default connect(mapStateToProps, null)(Header);
