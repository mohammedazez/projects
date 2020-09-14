import React from 'react';

const About = (props) => {
  console.log(props)
  props.user.name = "Delta"
  
  return (
    <div>
      <h1>About</h1>
      <h3>{props.user.name}</h3>
      <h3>{props.user.email}</h3>
      <h3>{props.user.age}</h3>
    </div>
  );
}

export default About;

