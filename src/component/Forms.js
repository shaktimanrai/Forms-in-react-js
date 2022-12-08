import { click } from '@testing-library/user-event/dist/click';
import React from 'react'
import { useState } from 'react';

const Forms = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");

  const InputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const onSubmit=()=>{
    setFullName(name);
  }

  return (
    <>
      <div>
        <h1>Hello {fullName}</h1>
        <input type="text" placeholder="Enter Your Name" onChange={InputEvent} value={name} />
        <button onClick={onSubmit}>Submit</button>
      </div>
    </>
  )
}

export default Forms;