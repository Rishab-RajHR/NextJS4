import DeleteButton from "@/components/DeleteButton";
import Link from "next/link";

const getEmployees = async () => {
    let data = await fetch('http://localhost:3000/employee')
    data = await data.json();
    return data;
}

const EmployeeList = async () => {
  const employees = await getEmployees();
  return (
    <>
       <h2>Employees</h2>
       {
           employees.map((item, i) => (
              <div key={i}>
                  <h1>{item.name}</h1>
                  <DeleteButton id={item.employeeId}/>
                  <Link href={`employee-list/${item.employeeId}/update`}>Edit</Link>
              </div>
           ))
       }
    </>
  )
}

export default EmployeeList