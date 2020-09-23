import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/Actions/Users.actions";
import { Spinner } from "react-bootstrap";

function Users(props) {
  console.log("props dalem components", props);
  const getUsers = props.getUsers;

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div>
      <h1>Users</h1>
      <h1>Data users</h1>
      {props.isLoading === true ? (
        <Spinner animation="border" />
      ) : (
        props.users.map((item, index) => (
          <div key={index}>
            <h3>Username: {item.username}</h3>
            <h3>Name: {item.nama}</h3>
          </div>
        ))
      )}
    </div>
  );
}

const mapStateToProps = (props) => {
  // console.log("props", props);
  return {
    users: props.data,
    isLoading: props.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
