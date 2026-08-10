'use client'

import React, { useState } from 'react'

const EventsFunctionState = () => {
  const [firstName, setFirstName] = useState('Ali');
  // const sayHello = (name) => {
  //     alert(`Hello ${name}`);
  // }

  // let firstName = 'Tillu';
  const changeName = () => {
      // firstName = 'Raman';
      setFirstName('Pandian')
  }

  return (
    <>
        <h2>Events Functions & State</h2>
        {/* <button onClick={() => alert("Hello From NextJS Team")}>Click Me</button> */}
        {/* <button onClick={() => sayHello('Tovino')}>Click Me</button> */}
        <h3>My name is: {firstName} </h3>
        <button onClick={changeName}>Click Me</button>
    </>
  )
}

export default EventsFunctionState