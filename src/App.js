import React, { useState, useEffect } from "react"
import Header from "./components/ui/Header"
import EmployeeTable from "./components/employees/employeeTable"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/styles/main.css"

const App = () => {
  const [employees, setEmployees ] = useState([]);
  const [isLoading, setisLoading ] = useState(true);
  const [search, setSearch ] = useState("")
  const [filterEmployees, setFilteredEmployees] = useState([]);
  
  useEffect(() => {
    const fetchEmployees = async () => {
      const result = await axios(`https://randomuser.me/api/?results=20`)
      setEmployees(result.data.results)
      setisLoading(false)
    }
    fetchEmployees()
  }, []);

  useEffect(() => {
        setFilteredEmployees(employees.filter(function(employee){
        return ((employee.name.first + employee.name.last).toLowerCase()).includes(search.toLowerCase())
      }))
  }, [employees, search]);

  const ascendingAge = () => {
    setFilteredEmployees(employees.sort(function (a,b) {return a.dob.age - b.dob.age;}))
  } 

  const descendingAge = () => {
    setFilteredEmployees(employees.sort(function (a,b) {return b.dob.age - a.dob.age;}))
  }

  return (
    <div className="App d-flex flex-column align-items-center pl-5 pr-5">
    <Header />
    <input className="text-center"type="text" placeholder="Search Employees" autoFocus value={search} onChange={(e) => setSearch(e.target.value)}/>
    <EmployeeTable isLoading={isLoading} employees={filterEmployees} ascendingAge={ ascendingAge } descendingAge={ descendingAge }/>
    </div>
  );
}

export default App;
