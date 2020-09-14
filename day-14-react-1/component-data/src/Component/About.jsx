import React from 'react';

const About = (props) => {
  console.log(props)

  return (
    <div>
      <h1>About</h1>
      <h3>{props.name}</h3>
      <h3>{props.email}</h3>
      <h3>{props.age}</h3>
    </div>
  );
}

export default About;

