import React, { useState } from 'react';

const Form = () => {
  const [checkBoxData, setCheckBoxData] = useState([
    {isChecked:false, label: "Boat"},
    {isChecked:false, label: "Car"},
    {isChecked:false, label: "Bike"},
  ]);

  const [gender, setGender] = useState("M")

  const handleCheck = (itemCheckBox) => {
    itemCheckBox.isChecked = !itemCheckBox.isChecked
  
    let newData = [...checkBoxData]

    setCheckBoxData(newData)
  }

  console.log(checkBoxData)
  console.log(gender)

  return (
    <div>
        <form>
          <h1>Form</h1>
          {/* Checkbox */}
          <label htmlFor="">Vehicle</label><br/>
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
        <br/>

        {/* Radio */}
        <label>Gender</label><br/>
        <input type="radio" checked={gender === 'M'} onChange={() => setGender('M')} />
        <label htmlFor="">Male</label><br/>

        <input type="radio" checked={gender === 'F'} onChange={() => setGender('F')} />
        <label htmlFor="">Female</label>

      </form>
    </div>
  );
}

export default Form;
