'use client';
import { useState } from 'react';
import style from '../conditionalStyling.module.css';

const ConditionalStyling = () => {
  const [color, setColor] = useState('blue');
  const {green} = style;
  return (
    <>
        <h2 className={style.heading}>Conditional Styling In Next JS 16</h2>
        {/* Conditional Styling */}
        {/* <h3 className={color == 'blue' ? style.green : style.pink}>Alex Pandian</h3> */}

        {/* Use Style Attribute */}
        {/* <h3 style={{backgroundColor: color == 'blue' ? 'yellow' : 'purple'}}>Alex Pandian</h3> */}

        {/* Use Id Attribute */}
        {/* <h3 id={style.my}>Hello, Alex Pandian</h3>*/}

        {/* Multiple Tags */}
        <h3 className={green}>Hello, Alex Pandian</h3>
        <h3 className={green}>Hello, Alex Pandian</h3>
        <h3 className={green}>Hello, Alex Pandian</h3>

        <button onClick={() => setColor('red')}>Change Color</button>
    </>
  )
}

export default ConditionalStyling