import Image from 'next/image'
import React from 'react'
// import Img from '/public/next.svg';
const ImageOptimization = () => {
  // console.log(Img)
  return (
    <>
        <h2>Image Optimation In Next JS 16</h2>
        {/* <Image 
           src={Img}
           alt='Next JS Image'
           height={300}
           width={500}
        /> */}
        <Image 
           src='https://images.pexels.com/photos/17494564/pexels-photo-17494564.jpeg?_gl=1*vz4e36*_ga*MTA0Njk1NTUzOC4xNzg2NTA5ODI0*_ga_8JE65Q40S6*czE3ODY1MDk4MjMkbzEkZzEkdDE3ODY1MDk4MzYkajQ3JGwwJGgw'
           alt='Pexel Image'
           height={400}
           width={400}
        />
    </>
  )
}

export default ImageOptimization;