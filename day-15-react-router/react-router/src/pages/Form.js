import React, { useState } from 'react';

const Form = () => {
  const [checkBoxData, setCheckBoxData] = useState([
    {isChecked:false, label: "Boat"},
    {isChecked:false, label: "Car"},
    {isChecked:false, label: "Bike"},
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
              <input 
                onChange={() => handleCheck(item)} 
                type="checkbox" 
                name="vehicle1" 
                checked={item.isCheked} />
              <label>{item.label}</label><br />
            </div>
          ))}
      </form>
    </div>
  );
}

export default Form;
