import React, { useState } from 'react';

const Form = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const [checkBoxData, setCheckBoxData] = useState([
    { isChecked: false, label: "Boat" },
    { isChecked: false, label: "Car" },
    { isChecked: false, label: "Bike" },
  ]);

  const [gender, setGender] = useState("M")

  const handleCheck = (itemCheckBox) => {
    itemCheckBox.isChecked = !itemCheckBox.isChecked

    let newData = [...checkBoxData]

    setCheckBoxData(newData)
  }

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log("user", user)
    console.log("Vehicle", checkBoxData)
    console.log("Gender", gender)
  }

  return (
    <div>
      <form>
        <h1>Form</h1>

        {/* Login */}
        <label htmlFor="">email</label>
        <input type="text" name="email" onChange={handleChange} /> <br />

        <label htmlFor="">password</label>
        <input type="password" name="password" onChange={handleChange} /><br />
        <br />

        {/* Checkbox */}
        <label htmlFor="">Vehicle</label><br />
        {checkBoxData.map((item, index) => (
          <div key={index}>
            <input
              onChange={() => handleCheck(item)}
              type="checkbox"
              name="vehicle1"
              defaultChecked={item.isChecked} />
            <label>{item.label}</label><br />
          </div>
        ))}
        <br />

        {/* Radio */}
        <label>Gender</label><br />
        <input type="radio" checked={gender === 'M'} onChange={() => setGender('M')} />
        <label htmlFor="">Male</label><br />

        <input type="radio" checked={gender === 'F'} onChange={() => setGender('F')} />
        <label htmlFor="">Female</label><br />
        <br />

        {/* button */}
        <button onClick={handleClick}>submit</button> <br />

      </form>
    </div>
  );
}

export default Form;
