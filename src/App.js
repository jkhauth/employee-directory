import './App.css';
import React, { useState, useEffect } from "react"
// import Nav from "./components/Nav"
import Header from "./components/ui/Header"
import EmployeeTable from "./components/employees/employeeTable"
import Search from "./components/ui/Search"
import axios from 'axios';

const App = () => {
  //WRITE JAVASCRIPT HERE
  const [items, setItems ] = useState([])
  const [isLoading, setisLoading ] = useState(true)
  
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://randomuser.me/api/?inc=id,dob,picture,email,name,phone&?page=3&results=10&seed=abc`)
      console.log(result.data.results)
      setItems(result.data.results)
      setisLoading(false)
    }
    fetchItems()
  }, [])
  

  return (
    <div className="App">
    <Header />
    {/* <Nav /> */}
    <Search />
    <EmployeeTable isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
