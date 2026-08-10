import Link from 'next/link';
import React from 'react'

const About = () => {
  return (
    <>
        <h2>About Us</h2>
         <br></br>
        <Link href='/home'>Home Page</Link>
        <Link href='/contact'>Contact</Link>
    </>
  )
}

export default About;