import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {changeName} from '../redux/action/profile.action'

const Profile = () => {
  const stateProfile = useSelector(state => state)
  const dispatch = useDispatch()

  console.log(dispatch)
  console.log(stateProfile)

  const clickChangeName = () => {
    dispatch(changeName("Beta"))
  }

  return (
    <div>
      <h1 onClick={clickChangeName}>{stateProfile.name}</h1>
      <h3>{stateProfile.email}</h3>
    </div>
  );
}

export default Profile;
