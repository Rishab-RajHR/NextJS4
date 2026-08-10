'use client';

import { use } from 'react';

const Employees =({ params }) => {

   const { details } = use(params);

  // console.log(details );
  return (
    <>
       <h2>Employee Details</h2>
       <h2>Employee Name: {details}</h2>

    </>
  );
}

export default Employees