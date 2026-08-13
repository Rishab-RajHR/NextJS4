import DeleteButton from "@/components/DeleteButton";

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
              </div>
           ))
       }
    </>
  )
}

export default EmployeeList