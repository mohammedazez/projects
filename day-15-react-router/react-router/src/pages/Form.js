import React, { useState } from 'react';

const Form = () => {
  const [checkBoxData, setCheckBoxData] = useState([
    {name: "vehicle1", isChecked:false, label: "Boat"},
    {name: "vehicle2", isChecked:false, label: "Car"},
    {name: "vehicle3", isChecked:false, label: "Bike"},
  ]);

  const handleCheck = (itemCheckBox) => {
    itemCheckBox.isChecked = !itemCheckBox.isChecked
  
    let newData = [...checkBoxData]

    setCheckBoxData(newData)
  }

  console.log(checkBoxData)
  
  return (
    <div>
        <form action="">
          {checkBoxData.map((item, index) => (
            <div key={index}>
              <input onChange={() => handleCheck(item)} type="checkbox" name="vehicle1" defaultValue="Bike" checked={item.isCheked} />
              <label>{item.label}</label><br />
            </div>
          ))}
      </form>
    </div>
  );
}

export default Form;
