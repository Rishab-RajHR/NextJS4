'use client'

import { useEffect, useState } from "react";

const UpdateInfo = ({params}) => {
  // console.log(params.empid)
  const employeeId = params.empid;
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
     const getEmpInfo = async () => {
        let data = await fetch(`http://localhost:3000/employee/${employeeId}`)
        data = await data.json();
        // console.log(data.result.name)
        setName(data.result.name)
        setSalary(data.result.salary)
        setEmail(data.result.email)
     }
     getEmpInfo();
  },[employeeId])
  const update = async () => {
      let data = await fetch(`http://localhost:3000/employee/${employeeId}`, {
           method: "PUT",
           body: JSON.stringify({name, salary, email})
      })
      data = await data.json();
      if (data.success){
         alert("Data Updated Successfully")
      }
      else {
         alert("Try Again")
      }
  }
  return (
    <>
       <h2>Update Employee Info</h2>
       <input type="text" placeholder="Enter Employee's Name" value={name} onChange={(e) => setName(e.target.value)} /> <br/> <br/>
       <input type="text" placeholder="Enter Employee's salary" value={salary} onChange={(e) => setSalary(e.target.value)} /> <br/> <br/>
       <input type="email" placeholder="Enter Employee's Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br/> <br/>
       <button onClick={update}>Update</button>
    </>
  )
}

export default UpdateEInfo